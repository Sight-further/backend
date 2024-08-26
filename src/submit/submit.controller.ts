import { Controller, Get, Query } from '@nestjs/common';
import * as path from 'path';
import { promises as fs } from 'fs';
import { SubmitService } from './submit.service';

@Controller('submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}
  @Get('deepfakes')
  async getSubmits(@Query("schoolName") schoolName, @Query("level") level) {
    // TODO: Json Savement Logic
    const fPath = path.join(__dirname, "..", "..", "..", "saved", "datas.json")
    if(!(await this.submitService.fileExists(fPath))) {
        await fs.writeFile(fPath, JSON.stringify([]));
    }
    let data: { [key: string]: any } = JSON.parse(await fs.readFile(fPath, 'utf-8'));
    if (data[schoolName] == null) {
        data.push({ schoolName, level });
    }
    const updatedJsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(fPath, updatedJsonString, 'utf-8'); 
  }
}

import { Injectable } from "@nestjs/common";
import { promises as fs } from 'fs';

@Injectable()
export class SubmitService {
    async fileExists(filePath: string): Promise<boolean> {
        try {
          await fs.access(filePath);
          return true;
        } catch {
          return false;
        }
    }
}
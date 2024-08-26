import { Injectable } from '@nestjs/common';

@Injectable()
export class RegionService {
  async getRegion() {
    return 'Hello World!';
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchesController } from './searches/searches.controller';
import { RegionService } from './searches/region.service';
import { SubmitController } from './submit/submit.controller';
import { SubmitService } from './submit/submit.service';

@Module({
  imports: [],
  controllers: [AppController, SearchesController, SubmitController],
  providers: [AppService, RegionService, SubmitService],
})
export class AppModule {}

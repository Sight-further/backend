import { Test, TestingModule } from '@nestjs/testing';
import { SubmitController } from './submit.controller';

describe('SubmitController', () => {
  let controller: SubmitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmitController],
    }).compile();

    controller = module.get<SubmitController>(SubmitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

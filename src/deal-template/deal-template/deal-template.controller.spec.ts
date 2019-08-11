import { Test, TestingModule } from '@nestjs/testing';
import { DealTemplateController } from './deal-template.controller';

describe('DealTemplate Controller', () => {
  let controller: DealTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealTemplateController],
    }).compile();

    controller = module.get<DealTemplateController>(DealTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AdvertTemplateController } from './advert-template.controller';

describe('AdvertTemplate Controller', () => {
  let controller: AdvertTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertTemplateController],
    }).compile();

    controller = module.get<AdvertTemplateController>(AdvertTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

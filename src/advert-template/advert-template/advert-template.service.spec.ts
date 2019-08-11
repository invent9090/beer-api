import { Test, TestingModule } from '@nestjs/testing';
import { AdvertTemplateService } from './advert-template.service';

describe('AdvertTemplateService', () => {
  let service: AdvertTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertTemplateService],
    }).compile();

    service = module.get<AdvertTemplateService>(AdvertTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

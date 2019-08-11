import { Test, TestingModule } from '@nestjs/testing';
import { DealTemplateService } from './deal-template.service';

describe('DealTemplateService', () => {
  let service: DealTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealTemplateService],
    }).compile();

    service = module.get<DealTemplateService>(DealTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

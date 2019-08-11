import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCategoryService } from './payment-category.service';

describe('PaymentCategoryService', () => {
  let service: PaymentCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentCategoryService],
    }).compile();

    service = module.get<PaymentCategoryService>(PaymentCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

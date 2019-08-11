import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCategoryController } from './payment-category.controller';

describe('PaymentCategory Controller', () => {
  let controller: PaymentCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentCategoryController],
    }).compile();

    controller = module.get<PaymentCategoryController>(PaymentCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

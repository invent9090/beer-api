import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentCategoryController } from './payment-category/payment-category.controller';
import { PaymentCategoryService } from './payment-category/payment-category.service';
import { PaymentCategory } from './payment-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentCategory])],
  controllers: [PaymentCategoryController],
  providers: [PaymentCategoryService]
})
export class PaymentCategoryModule { }

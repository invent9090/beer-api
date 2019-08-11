import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerCategoryController } from './seller-category/seller-category.controller';
import { SellerCategoryService } from './seller-category/seller-category.service';
import { SellerCategory } from './seller-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerCategory])],
  controllers: [SellerCategoryController],
  providers: [SellerCategoryService]
})
export class SellerCategoryModule { }

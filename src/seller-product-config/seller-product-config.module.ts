import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerProductConfigController } from './seller-product-config/seller-product-config.controller';
import { SellerProductConfigService } from './seller-product-config/seller-product-config.service';
import { SellerProductConfig } from './seller-product-config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerProductConfig])],
  controllers: [SellerProductConfigController],
  providers: [SellerProductConfigService]
})
export class SellerProductConfigModule { }

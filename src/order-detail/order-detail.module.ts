import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailService } from './order-detail/order-detail.service';
import { OrderDetailController } from './order-detail/order-detail.controller';
import { OrderDetail } from './order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  providers: [OrderDetailService],
  controllers: [OrderDetailController]
})
export class OrderDetailModule { }

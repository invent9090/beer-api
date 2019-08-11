import { Module } from '@nestjs/common';
import { UploadsController } from './uploads/uploads.controller';
import { UploadsService } from './uploads/uploads.service';
import { Product } from '../product/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [UploadsController],
  providers: [UploadsService]
})
export class UploadsModule {}

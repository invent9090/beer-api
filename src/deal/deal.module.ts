import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealController } from './deal/deal.controller';
import { DealService } from './deal/deal.service';
import { Deal } from './deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  controllers: [DealController],
  providers: [DealService]
})
export class DealModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxService } from './tax/tax.service';
import { TaxController } from './tax/tax.controller';
import { Tax } from './tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tax])],
  providers: [TaxService],
  controllers: [TaxController]
})
export class TaxModule { }

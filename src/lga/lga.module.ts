import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LgaController } from './lga/lga.controller';
import { LgaService } from './lga/lga.service';
import { Lga } from './lga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lga])],
  controllers: [LgaController],
  providers: [LgaService]
})
export class LgaModule {}

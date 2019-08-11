import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DealTemplateController } from './deal-template/deal-template.controller';
import { DealTemplateService } from './deal-template/deal-template.service';
import { DealTemplate } from './deal-template.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DealTemplate])],
  controllers: [DealTemplateController],
  providers: [DealTemplateService]
})
export class DealTemplateModule {}

import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AttributeValueController } from './attribute-value/attribute-value.controller';
import { AttributeValueService } from './attribute-value/attribute-value.service';
import { AttributeValue } from './attribute-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValue])]
,  controllers: [AttributeValueController],
  providers: [AttributeValueService]
})
export class AttributeValueModule {}

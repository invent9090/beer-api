import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeController } from './attribute/attribute.controller';
import { AttributeService } from './attribute/attribute.service';
import { Attribute } from './attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute])],
  controllers: [AttributeController],
  providers: [AttributeService]
})
export class AttributeModule {}

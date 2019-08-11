import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertTemplateController } from './advert-template/advert-template.controller';
import { AdvertTemplateService } from './advert-template/advert-template.service';
import { AdvertTemplate } from './advert-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdvertTemplate])],
  controllers: [AdvertTemplateController],
  providers: [AdvertTemplateService]
})
export class AdvertTemplateModule { }

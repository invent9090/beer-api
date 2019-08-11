import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdvertTemplate } from '../advert-template.entity';

@Injectable()
export class AdvertTemplateService extends TypeOrmCrudService<AdvertTemplate> {
    constructor(@InjectRepository(AdvertTemplate) repo) {
        super(repo)
    }
}

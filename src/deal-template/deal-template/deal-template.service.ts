import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DealTemplate } from '../deal-template.entity';

@Injectable()
export class DealTemplateService extends TypeOrmCrudService<DealTemplate> {

    constructor(@InjectRepository(DealTemplate) repo) {
        super(repo)
    }
}


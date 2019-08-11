import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Deal } from './../deal.entity';

@Injectable()
export class DealService extends TypeOrmCrudService<Deal> {

    constructor(@InjectRepository(Deal) repo) {
        super(repo)
    }
}


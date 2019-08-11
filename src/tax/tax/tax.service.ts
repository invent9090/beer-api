import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tax } from './../tax.entity';

@Injectable()
export class TaxService extends TypeOrmCrudService<Tax> {

    constructor(@InjectRepository(Tax) repo) {
        super(repo)
    }
}

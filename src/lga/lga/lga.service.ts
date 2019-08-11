import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Lga } from './../lga.entity';

@Injectable()
export class LgaService extends TypeOrmCrudService<Lga> {

    constructor(@InjectRepository(Lga) repo) {
        super(repo)
    }
}

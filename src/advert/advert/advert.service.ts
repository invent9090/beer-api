import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Advert } from './../advert.entity';

@Injectable()
export class AdvertService extends TypeOrmCrudService<Advert> {

    constructor(@InjectRepository(Advert)  repo) {
        super(repo)
     }
}

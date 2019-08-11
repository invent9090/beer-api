import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Attribute } from '../attribute.entity';

@Injectable()
export class AttributeService extends TypeOrmCrudService<Attribute> {

    constructor(@InjectRepository(Attribute)  repo) {
        super(repo)
     }
}

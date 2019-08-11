import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SellerCategory } from './../seller-category.entity';

@Injectable()
export class SellerCategoryService extends TypeOrmCrudService<SellerCategory> {

    constructor(@InjectRepository(SellerCategory) repo) {
        super(repo)
    }
}

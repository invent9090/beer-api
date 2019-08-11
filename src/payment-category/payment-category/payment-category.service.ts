import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PaymentCategory } from './../payment-category.entity';

@Injectable()
export class PaymentCategoryService extends TypeOrmCrudService<PaymentCategory> {

    constructor(@InjectRepository(PaymentCategory) repo) {
        super(repo)
    }
}


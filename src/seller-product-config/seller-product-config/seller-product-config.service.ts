import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SellerProductConfig } from './../seller-product-config.entity';


@Injectable()
export class SellerProductConfigService extends TypeOrmCrudService<SellerProductConfig> {

    constructor(@InjectRepository(SellerProductConfig) repo) {
        super(repo)
    }
}


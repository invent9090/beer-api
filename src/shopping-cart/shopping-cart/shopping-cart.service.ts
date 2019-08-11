import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ShoppingCart } from './../shopping-cart.entity';

@Injectable()
export class ShoppingCartService extends TypeOrmCrudService<ShoppingCart> {

    constructor(@InjectRepository(ShoppingCart) repo) {
        super(repo)
    }
}

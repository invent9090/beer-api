import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../product/product.entity';

@Injectable()
export class UploadsService {
    constructor(
        @InjectRepository(Product)
        private contactRepository: Repository<Product>,
    ) { }

    async update(product: Product): Promise<any> {
        return await this.contactRepository.update(product.id, product);
    }

    async getOne(id: number): Promise<Product> {
        return await this.contactRepository.findOneOrFail(id);
    }
}

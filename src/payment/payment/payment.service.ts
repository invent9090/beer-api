import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Payment } from './../payment.entity';

@Injectable()
export class PaymentService  extends TypeOrmCrudService<Payment> {

    constructor(@InjectRepository(Payment) repo) {
        super(repo)
    }
}

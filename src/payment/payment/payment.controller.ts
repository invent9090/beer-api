import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';


import { PaymentService } from './payment.service';
import { Payment } from './../payment.entity';

@Crud({
    model: {
        type: Payment,
    },
})


@Controller('payments')
export class PaymentController implements CrudController<Payment> {

    constructor(public service: PaymentService) { }

}


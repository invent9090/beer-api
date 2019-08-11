import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { OrderService } from './order.service';
import { Order } from './../order.entity';

@Crud({
    model: {
        type: Order,
    },
})


@Controller('orders')
export class OrderController implements CrudController<Order> {

    constructor(public service: OrderService) { }

}


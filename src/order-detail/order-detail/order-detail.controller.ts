import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './../order-detail.entity';

@Crud({
    model: {
        type: OrderDetail,
    },
})

@Controller('order-details')
export class OrderDetailController implements CrudController<OrderDetail> {

    constructor(public service: OrderDetailService) { }

}

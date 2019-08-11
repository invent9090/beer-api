import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';


import { PaymentCategoryService } from './payment-category.service';
import { PaymentCategory } from './../payment-category.entity';

@Crud({
    model: {
        type: PaymentCategory,
    },
})


@Controller('payment-categories')
export class PaymentCategoryController implements CrudController<PaymentCategory> {

    constructor(public service: PaymentCategoryService) { }

}



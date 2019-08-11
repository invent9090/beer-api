import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './../shopping-cart.entity';

@Crud({
    model: {
        type: ShoppingCart,
    },
})


@Controller('shopping-carts')
export class ShoppingCartController implements CrudController<ShoppingCart> {

    constructor(public service: ShoppingCartService) { }

}

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { SellerCategoryService } from './seller-category.service';
import { SellerCategory } from './../seller-category.entity';

@Crud({
    model: {
        type: SellerCategory,
    },
})


@Controller('seller-categories')
export class SellerCategoryController implements CrudController<SellerCategory> {

    constructor(public service: SellerCategoryService) { }

}


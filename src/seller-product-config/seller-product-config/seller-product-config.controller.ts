import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { SellerProductConfigService } from './seller-product-config.service';
import { SellerProductConfig } from './../seller-product-config.entity';

@Crud({
    model: {
        type: SellerProductConfig,
    },
})

@Controller('seller-product-configs')
export class SellerProductConfigController implements CrudController<SellerProductConfig> {

    constructor(public service: SellerProductConfigService) { }

}

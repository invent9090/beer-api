import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { TaxService } from './tax.service';
import { Tax } from './../tax.entity';

@Crud({
    model: {
        type: Tax,
    },
})


@Controller('taxes')
export class TaxController implements CrudController<Tax> {

    constructor(public service: TaxService) { }

}

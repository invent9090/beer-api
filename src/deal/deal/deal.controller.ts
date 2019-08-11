import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { DealService } from './deal.service';
import { Deal } from './../deal.entity';

@Crud({
    model: {
        type: Deal,
    },
})


@Controller('deals')
export class DealController implements CrudController<Deal> {

    constructor(public service: DealService) { }

}


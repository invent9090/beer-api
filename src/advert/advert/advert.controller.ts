import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AdvertService } from './advert.service';
import { Advert } from './../advert.entity';

@Crud({
    model: {
        type: Advert,
    },
})

@Controller('adverts')
export class AdvertController implements CrudController<Advert> {

    constructor(public service: AdvertService) { }

}

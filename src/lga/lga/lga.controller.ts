import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { LgaService } from './lga.service';
import { Lga } from './../lga.entity';

@Crud({
    model: {
        type: Lga,
    },
})



@Controller('lgas')
export class LgaController implements CrudController<Lga> {

    constructor(public service: LgaService) { }

}


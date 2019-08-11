import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AttributeService } from './attribute.service';
import { Attribute } from '../attribute.entity';

@Crud({
    model: {
      type: Attribute,
    },
  })


@Controller('attribute')
export class AttributeController implements CrudController<Attribute> {

    constructor(public service: AttributeService) { }

}


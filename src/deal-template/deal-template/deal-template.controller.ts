import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { DealTemplateService } from './deal-template.service';
import { DealTemplate } from '../deal-template.entity';

@Crud({
    model: {
      type: DealTemplate,
    },
  })


@Controller('deal-templates')
export class DealTemplateController implements CrudController<DealTemplate> {

    constructor(public service: DealTemplateService) { }

}


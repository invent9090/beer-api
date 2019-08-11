import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AdvertTemplateService } from './advert-template.service';
import { AdvertTemplate } from '../advert-template.entity';

@Crud({
    model: {
      type: AdvertTemplate,
    },
  })



@Controller('advert-templates')
export class AdvertTemplateController implements CrudController<AdvertTemplate> {

    constructor(public service: AdvertTemplateService) { }

}


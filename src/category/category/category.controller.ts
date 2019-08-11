import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CategoryService } from './category.service';
import { Category } from '../category.entity';

@Crud({
    model: {
      type: Category,
    },
  })

@Controller('categories')
export class CategoryController implements CrudController<Category> {

    constructor(public service: CategoryService) { }

}


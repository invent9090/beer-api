import { Controller, Post, Param } from '@nestjs/common';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Crud, CrudController, ParsedRequest, CrudRequest, CrudRequestInterceptor, Override, ParsedBody } from '@nestjsx/crud';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { ProductService } from './product.service';
import { Product } from './product.entity';

@Crud({
  model: {
    type: Product,
  },
  query: {
    limit: 100,
    maxLimit: 100,
    cache: 2000,
}
})

@Controller('products')
export class ProductController implements CrudController<Product> {

  constructor(public service: ProductService) { }


}

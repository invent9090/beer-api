import { Controller, Put, Param, Body, Post, Get, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { UploadsService } from './uploads.service';
import { Product } from '../../product/product.entity';

@Controller('uploads')
export class UploadsController {
    constructor(private uploadService: UploadsService) { }

    @Post(':id/avatar')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './products',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    return cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        }
    )
    )
    async update(@Param('id') id: number, @UploadedFile() file): Promise<any> {
        
         this.uploadService.getOne(id).then(Product=> {
             Product.image= file.path;
             this.uploadService.update(Product).then( result=>{
                 console.log("Product was succefully Updated!")
             });
         })
        
       
    }

    @Get('avatars/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'products'});
    }
}

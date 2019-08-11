import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { HomeBannerService } from './home-banner.service';
import { HomeBanner } from '../home-banner.entity';

@Crud({
    model: {
        type: HomeBanner,
    },
})



@Controller('home-banners')
export class HomeBannerController implements CrudController<HomeBanner> {

    constructor(public service: HomeBannerService) { }

}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { HomeBanner } from '../home-banner.entity';

@Injectable()
export class HomeBannerService extends TypeOrmCrudService<HomeBanner> {
    constructor(@InjectRepository(HomeBanner) repo) {
        super(repo)
    }
}

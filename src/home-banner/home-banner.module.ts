import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeBannerController } from './home-banner/home-banner.controller';
import { HomeBannerService } from './home-banner/home-banner.service';
import { HomeBanner } from './home-banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeBanner])],
  controllers: [HomeBannerController],
  providers: [HomeBannerService]
})
export class HomeBannerModule { }

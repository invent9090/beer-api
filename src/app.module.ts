import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { AttributeModule } from './attribute/attribute.module';
import { AttributeValueModule } from './attribute-value/attribute-value.module';
import { DealTemplateModule } from './deal-template/deal-template.module';
import { AdvertTemplateModule } from './advert-template/advert-template.module';
import { HomeBannerModule } from './home-banner/home-banner.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { DealModule } from './deal/deal.module';
import { AdvertModule } from './advert/advert.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { TaxModule } from './tax/tax.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { UploadsModule } from './uploads/uploads.module';
import { PaymentCategoryModule } from './payment-category/payment-category.module';
import { PaymentModule } from './payment/payment.module';  
import { StateModule } from './state/state.module';
import { LgaModule } from './lga/lga.module';
import { SellerProductConfigModule } from './seller-product-config/seller-product-config.module';
import { SellerCategoryModule } from './seller-category/seller-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-23-21-109-177.compute-1.amazonaws.com',
      port: 5432,
      username: 'jptrcrexnizjpm',
      password: '15e450339ae29f830c3c802cafc640155b16da1c08a4bb1526c5c97635fc29e3',
      database: 'd6i24j65bsilek',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      cache: {
        type: 'database',
        tableName: 'configurable-table-query-result-cache',
      },
      extra: {
        ssl: true,
      },
      logging: true,
    }),
    ProductModule,
    AuthModule,
    CategoryModule,
    AttributeModule,
    AttributeValueModule,
    DealTemplateModule,
    AdvertTemplateModule,
    HomeBannerModule,
    ShoppingCartModule,
    DealModule,
    AdvertModule,
    OrderModule,
    OrderDetailModule,
    TaxModule,
    AuditTrailModule,
    UploadsModule,
    PaymentCategoryModule,
    PaymentModule,
    StateModule,
    LgaModule,
    SellerProductConfigModule,
    SellerCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ShoppingCart } from './shopping-cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCart])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule { }

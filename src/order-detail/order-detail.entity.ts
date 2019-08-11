import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { Order } from "./../order/order.entity";
import { Product } from "./../product/product.entity";

@Entity()
export class OrderDetail {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150 })
    productName: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    productImage: string;

    @ApiModelProperty()
    @Column()
    unitCost: number;

    @ApiModelProperty()
    @Column()
    quantity: number;

    @ManyToOne(type => Order, order => order.orderDetails)
    order: Order;

    @ManyToOne(type => Product, p => p.orderDetails)
    product: Product;

}

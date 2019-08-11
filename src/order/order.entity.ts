import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { OrderDetail } from "./../order-detail/order-detail.entity";

@Entity()
export class Order {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    totalAmount: number;

    @ApiModelProperty()
    @Column()
    createdOn: Date;

    @ApiModelProperty()
    @Column()
    shippedOn: Date;

    @ApiModelProperty()
    @Column({ length: 1000 })
    comments: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    authCode: string;

    @OneToMany(type => OrderDetail, o => o.order)
    orderDetails: OrderDetail[];

}

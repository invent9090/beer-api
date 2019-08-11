import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { PaymentCategory } from './../payment-category/payment-category.entity';

@Entity()
export class Payment {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({length:150})
    PaymentName: string;

    @ApiModelProperty()
    @Column()
    paymentCategoryId: number;

    @ManyToOne(type => PaymentCategory, cat => cat.payments)
    paymentCategory: PaymentCategory;
}

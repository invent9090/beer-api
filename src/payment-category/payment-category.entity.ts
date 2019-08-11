import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { Payment } from "./../payment/payment.entity";

@Entity()
export class PaymentCategory {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150 })
    categoryName: string;

    @OneToMany(type => Payment, p => p.paymentCategory)
    payments: Payment[];
}

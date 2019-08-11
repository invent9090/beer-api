import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class ShoppingCart {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    quantity: number;

    @ApiModelProperty()
    @Column()
    addOn: Date;

    @ApiModelProperty()
    @Column()
    productName: string;

    @ApiModelProperty()
    @Column()
    price: number;

}

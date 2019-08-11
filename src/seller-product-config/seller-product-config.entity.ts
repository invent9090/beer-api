import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class SellerProductConfig {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    productId: number;

    @ApiModelProperty()
    @Column()
    sellerId: number;

    @ApiModelProperty()
    @Column()
    useStandardPrice: boolean;

    @ApiModelProperty()
    @Column()
    unitPrice: number;

    @ApiModelProperty()
    @Column({ nullable: true })
    compareAtPrice: number;

    @Column()
    maximumStock: number;

    @Column()
    totalAvailable: number;

    @Column()
    autoManagerInventory: boolean;

}

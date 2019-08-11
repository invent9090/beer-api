import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { Category } from "./../category/category.entity";
import { Deal } from "./../deal/deal.entity";

@Entity()
export class DealTemplate {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    image: string;

    @ApiModelProperty()
    @Column()
    showImage: boolean;

    @ApiModelProperty()
    @Column({ length: 500, nullable: true })
    smallTitle: string;

    @ApiModelProperty()
    @Column()
    showSmallTitle: boolean;

    @ApiModelProperty()
    @Column({ nullable: true })
    price: number;

    @ApiModelProperty()
    @Column()
    showPrice: boolean;

    @ApiModelProperty()
    @Column({ length: 50, nullable: true })
    day: string;

    @ApiModelProperty()
    @Column({ length: 50, nullable: true })
    hour: string;

    @ApiModelProperty()
    @Column({ length: 50, nullable: true })
    minute: string;

    @ApiModelProperty()
    @Column()
    showDate: boolean;

    @ApiModelProperty()
    @Column({ length: 1000, nullable: true })
    description: string;

    @ApiModelProperty()
    @Column()
    showDescription: boolean;

    @ManyToOne(type => Category, cat => cat.dealTemplates)
    category: Category;

    @Column()
    isActive: boolean;

    @Column({ nullable: true })
    startDay: Date;

    @Column({ nullable: true })
    endDate: Date;

    @Column()
    ownerId: number;

    @OneToMany(type => Deal, deal => deal.template)
    deals: Deal[];

}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ViewColumn, OneToMany } from "typeorm";
import { Category } from "./../category/category.entity";
import { ApiModelProperty } from "@nestjs/swagger";
import { Advert } from "./../advert/advert.entity";

@Entity()
export class AdvertTemplate {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    image: string;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    bigTitle: string;

    @ApiModelProperty()
    @ApiModelProperty()
    @Column({ nullable: true })
    showBigTitle: boolean;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    smallTitle: string;

    @ApiModelProperty()
    @Column()
    showSmallTitle: boolean;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    smallTitleColor: string;

    @ApiModelProperty()
    @Column()
    showSmallTitleColor: boolean;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    footTitle: string;

    @ApiModelProperty()
    @Column()
    showFootTitle: boolean;

    @ApiModelProperty()
    @ManyToOne(type => Category, cat => cat.advertTemplates)
    category: Category;

    @ApiModelProperty()
    @Column()
    isActive: boolean;

    @ApiModelProperty()
    @Column({ nullable: true })
    startDay: Date;

    @ApiModelProperty()
    @Column({ nullable: true })
    endDate: Date;

    @ApiModelProperty()
    @Column({ nullable: true })
    ownerId: number;

    @OneToMany(type => Advert, ad => ad.template)
    adverts: Advert[];
}

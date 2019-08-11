import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Product } from './../product/product.entity';
import { AdvertTemplate } from './../advert-template/advert-template.entity';
import { DealTemplate } from './../deal-template/deal-template.entity';


@Entity()
export class Category {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 100 })
    name: string;

    @ApiModelProperty()
    @Column({ length: 1000, nullable: true })
    description: string;

    @OneToMany(type => Product, product => product.Category)
    products: Product[];

    @OneToMany(type => AdvertTemplate, ad => ad.category)
    advertTemplates: AdvertTemplate;

    @OneToMany(type => DealTemplate, d => d.category)
    dealTemplates: DealTemplate;

}

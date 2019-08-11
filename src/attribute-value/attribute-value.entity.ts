import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { Attribute } from "./../attribute/attribute.entity";
import { Product } from "./../product/product.entity";

@Entity()
export class AttributeValue {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    value: string;

    @ManyToOne(type => Attribute, at => at.attributeValues)
    attribute: Attribute;

    @ManyToMany(type => Product, p => p.attributeValues)
    products: Product[];
}

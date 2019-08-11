import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Category } from './../category/category.entity';
import { AttributeValue } from './../attribute-value/attribute-value.entity';
import { OrderDetail } from './../order-detail/order-detail.entity';

@Entity()
export class Product {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 100 ,nullable: true})
    name: string;

    @ApiModelProperty()
    @Column({ length: 1000 ,nullable: true})
    description: string;

    @ApiModelProperty()
    @Column({nullable: true})
    price: number;

    @ApiModelProperty()
    @Column({nullable: true})
    compareAtPrice: number;

    @ApiModelProperty()
    @Column({ length: 150,nullable: true })
    image: string;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    thumbnail: string;

    @ApiModelProperty()
    @Column()
    chargeTax: boolean;

    @ApiModelProperty()
    @Column({nullable: true})
    categoryId: number;
   
    @ManyToOne(type => Category, cat => cat.products)
    Category: Category[];

   
    @ManyToMany(type => AttributeValue, at => at.products)
    @JoinTable()
    attributeValues: AttributeValue[];

 
    @OneToMany(type => OrderDetail, o => o.product)
    orderDetails: OrderDetail[];

}
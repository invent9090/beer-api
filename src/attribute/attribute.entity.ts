import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { AttributeValue } from './../attribute-value/attribute-value.entity';

@Entity()
export class Attribute {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    name: string;

    @OneToMany(type=> AttributeValue, at=>at.attribute)
    attributeValues: AttributeValue;

}

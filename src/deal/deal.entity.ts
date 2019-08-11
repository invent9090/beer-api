import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { DealTemplate } from "./../deal-template/deal-template.entity";

@Entity()
export class Deal {
@ApiModelProperty()
@PrimaryGeneratedColumn()
id: number;

@ApiModelProperty()
@Column({ length: 50 })
userId: string;

@ApiModelProperty()
@Column({ length: 150 })
title: string;

@ApiModelProperty()
@Column()
postedDate: Date;

@ApiModelProperty()
@Column()
isActive: boolean;

@ApiModelProperty()
@Column()
endDate: Date;

@ApiModelProperty()
@Column()
views: number;

@ApiModelProperty()
@Column()
isPublished: boolean;

@ApiModelProperty()
@Column()
publishDate: Date;

@ManyToOne(type => DealTemplate, temp => temp.deals)
template: DealTemplate;
}


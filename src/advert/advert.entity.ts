import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { AdvertTemplate } from "./../advert-template/advert-template.entity";

@Entity()
export class Advert {
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

    @ApiModelProperty()
    @Column()
    templateId: number;

    @ManyToOne(type => AdvertTemplate, temp => temp.adverts)
    template: AdvertTemplate;
}

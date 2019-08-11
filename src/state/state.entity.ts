import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { Lga } from './../lga/lga.entity';

@Entity()
export class State {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 200 })
    name: string;

    @OneToMany(type => Lga, lg => lg.state)
    LGAs: Lga[];
}

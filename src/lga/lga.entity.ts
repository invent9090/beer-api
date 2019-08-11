import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { State } from './../state/state.entity';

@Entity()
export class Lga {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    name: string;

    @ApiModelProperty()
    @Column()
    stateId: number;

    @ManyToOne(type => State, st => st.LGAs)
    state: State;
}

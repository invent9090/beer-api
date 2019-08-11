import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Tax {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({length: 150})
    taxType: string;

    @ApiModelProperty()
    @Column()
    taxPercentage: number;
}

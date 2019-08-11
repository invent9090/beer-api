import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from "./../auth/user.entity";

@Entity()
export class SellerCategory {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    categoryName: string;

    @ApiModelProperty()
    @Column()
    maximumStock: number;

    @OneToMany(type => User, u => u.category)
    users: User[]
}

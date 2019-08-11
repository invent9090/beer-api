import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity()
export class HomeBanner {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150, nullable: true })
    banner: string;

    @ApiModelProperty()
    @Column({ nullable: true })
    datePosted: Date;

    @ApiModelProperty()
    @Column({ nullable: true })
    isActive: boolean;
}

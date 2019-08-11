import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class AuditTrail {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 150 })
    userName: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    userId: string;

    @ApiModelProperty()
    @Column()
    execDate: Date;

    @ApiModelProperty()
    @Column({ length: 150 })
    execTime: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    execTimeMicro: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    eventType: string;

    @ApiModelProperty()
    @Column({ length: 1000 })
    eventResult: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    userRole: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    ipAddress: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    processId: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    threadId: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    hostName: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    constrollerName: string;

    @ApiModelProperty()
    @Column({ length: 1000 })
    description: string;

}

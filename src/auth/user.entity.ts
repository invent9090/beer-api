import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne } from 'typeorm';
import * as crypto from 'crypto';
import { ApiModelProperty } from '@nestjs/swagger';
import { SellerCategory } from './../seller-category/seller-category.entity';

export enum UserRole {
    ADMIN = 'admin',
    SELLER = 'seller',
    BUYER = 'buyer',
    GHOST = 'ghost'
}

@Entity()
export class User {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column('simple-json')
    name: { firstName: string, lastName: string, nickName: string };

    @ApiModelProperty()
    @Column('simple-json', { nullable: true })
    profile: {
        address1: string, address2: string, city: string, region: string,
        postalCode: string, state: string, phone: string
    }

    @ApiModelProperty()
    @Column({ default: '', nullable: true, comment: 'the image of the user' })
    avatar: string;

    @ApiModelProperty()
    @Column({ length: 150, unique: true, nullable: true })
    shopName: string;

    @ApiModelProperty()
    @Column('simple-json', { nullable: true })
    shopBanner: { shopLogo: string, banner1: string, banner2: string, nabber3: string }

    @ApiModelProperty()
    @Column({ length: 150, unique: true })
    email: string;

    @ApiModelProperty()
    @Column({ length: 500 })
    password: string;


    @BeforeInsert()
    async hashPassword() {
        this.password = await crypto.createHmac('sha256', this.password).digest('hex');
    }

    @ApiModelProperty()
    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GHOST
    })
    role: UserRole

    @ApiModelProperty()
    @Column({ nullable: true })
    stateId: number;

    @ApiModelProperty()
    @Column({ nullable: true })
    lgaId: number;

    @ApiModelProperty()
    @Column({ nullable: true })
    sellerCategoryId: number;

    @ManyToOne(type => SellerCategory, s => s.users)
    category: SellerCategory;
}
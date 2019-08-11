import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async  findByUser(emailVal: string, pass: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: emailVal,
                password: pass
            },
        });
    }

    async findById(idVal: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: idVal,
            },
        });

    }

    async findByUserName(name: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                shopName: name,
            },
        });

    }

    async findByUserEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                 email,
            },
        });

    }


    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
}

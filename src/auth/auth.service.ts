import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    private async validate(userData: User): Promise<User> {
        return await this.userService.findByUser(userData.email, userData.password);
    }

    public async login(user: User): Promise<any | { status: number }> {
        return this.validate(user).then((userData) => {
            if (!userData) {
                return { status: 404 };
            }
            const payload = `${userData.id}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200,
            };

        });
    }

    public async getUser(id: number): Promise<User> {
        return this.userService.findById(id);
    }

    public async  findByName(name: string): Promise<User> {
        return this.userService.findByUserName(name);
    }

    public async  findByEmail(email: string): Promise<User> {
        return this.userService.findByUserEmail(email);
    }

    public async register(user: User): Promise<any> {
        return this.userService.create(user);
    }
}

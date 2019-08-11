import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: User): Promise<any> {
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
        return this.authService.register(user);
    }

    @Get('user/:id')
    async getUser(@Param('id') id: number): Promise<any> {
        return this.authService.getUser(id);
    }

    @Get('find_by_username/:name')
    async findByUsername(@Param('name') name: string): Promise<any> {
        return this.authService.findByName(name);
    }

    @Get('find_by_email/:email')
    async findByEmail(@Param('email') email: string): Promise<any> {
        return this.authService.findByEmail(email);
    }
}

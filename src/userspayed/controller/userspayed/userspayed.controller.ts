import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersPayed } from '@prisma/client'
import { UsersPayedDto } from 'src/dtos/UserPayed.dto';
import { UserspayedService } from 'src/userspayed/services/userspayed/userspayed.service';
@Controller('userspayed')
export class UserspayedController {
    constructor(private readonly usersPayed: UserspayedService) { }
    @Get('')
    async getAllUsers(): Promise<UsersPayed[]> {
        return this.usersPayed.getAllUsersPayed()
    }
    @UsePipes(ValidationPipe)
    @Post('/create')
    async createUser(@Body() userpayed: UsersPayedDto): Promise<UsersPayed> {
        return this.usersPayed.createUserPayed(userpayed)
    }
} 

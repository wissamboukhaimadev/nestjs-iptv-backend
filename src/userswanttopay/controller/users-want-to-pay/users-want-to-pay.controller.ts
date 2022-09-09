import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersWantToPay } from '@prisma/client'
import { UsersWnatToPayDto } from 'src/dtos/UsersWantToPay.dto';
import { UsersWantToPayService } from 'src/userswanttopay/services/users-want-to-pay/users-want-to-pay.service';

@Controller('userswanttopay')
export class UsersWantToPayController {
    constructor(private readonly userswnattopayservice: UsersWantToPayService) { }


    @Get('')
    async getAllUsersWantToPay(): Promise<UsersWantToPay[]> {
        return this.userswnattopayservice.getAllUsersWantToPay()
    }

    @UsePipes(ValidationPipe)
    @Post('/create')
    async createUserWantToPay(@Body() usewanttopay: UsersWnatToPayDto): Promise<UsersWantToPay> {
        return this.userswnattopayservice.createUserWantToPay(usewanttopay)
    }

    @Patch('/update/:id')
    async updateUserWantToPay(@Body() usewanttopay, @Param('id', ParseIntPipe) id: number) {
        return this.userswnattopayservice.updateUserWantToPay(usewanttopay, id)
    }

    @Get('/singleuser/:id')
    async getSingleUser(@Param('id', ParseIntPipe) id: number) {
        return this.userswnattopayservice.getSingleUser(id)
    }
}

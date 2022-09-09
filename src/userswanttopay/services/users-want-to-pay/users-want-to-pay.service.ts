import { Injectable } from '@nestjs/common';
import { PrismalogicService } from 'src/prismalogic/prismalogic.service';
import { Prisma, UsersWantToPay } from '@prisma/client'
import { UsersWnatToPayDto } from 'src/dtos/UsersWantToPay.dto';
@Injectable()
export class UsersWantToPayService {

    constructor(private prismaUserWantToPay: PrismalogicService) { }

    async getAllUsersWantToPay(): Promise<UsersWantToPay[]> {
        return this.prismaUserWantToPay.usersWantToPay.findMany()
    }

    async createUserWantToPay(data): Promise<UsersWantToPay> {
        return this.prismaUserWantToPay.usersWantToPay.create({
            data
        })
    }

    async updateUserWantToPay(data: UsersWnatToPayDto, userId: number): Promise<UsersWantToPay> {
        return this.prismaUserWantToPay.usersWantToPay.update({
            where: {
                id: userId
            },
            data
        })
    }

    async getSingleUser(userId: number) {
        return this.prismaUserWantToPay.usersWantToPay.findUnique({
            where: {
                id: userId
            }
        })

    }

}

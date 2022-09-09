import { Injectable } from '@nestjs/common';
import { Prisma, UsersPayed } from '@prisma/client'
import { PrismalogicService } from 'src/prismalogic/prismalogic.service';
@Injectable()
export class UserspayedService {
    constructor(private prismaUsersPayed: PrismalogicService) { }

    async getAllUsersPayed(): Promise<UsersPayed[]> {
        return this.prismaUsersPayed.usersPayed.findMany()
    }

    async createUserPayed(data: Prisma.UsersPayedCreateInput): Promise<UsersPayed> {
        return this.prismaUsersPayed.usersPayed.create({
            data
        })
    }
}

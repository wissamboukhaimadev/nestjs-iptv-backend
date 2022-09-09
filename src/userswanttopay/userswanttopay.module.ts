import { Module } from '@nestjs/common';
import { UsersWantToPayService } from './services/users-want-to-pay/users-want-to-pay.service';
import { UsersWantToPayController } from './controller/users-want-to-pay/users-want-to-pay.controller';
import { PrismalogicModule } from 'src/prismalogic/prismalogic.module';

@Module({
  imports: [PrismalogicModule],
  providers: [UsersWantToPayService],
  controllers: [UsersWantToPayController]
})
export class UserswanttopayModule { }

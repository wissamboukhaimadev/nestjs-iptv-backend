import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserspayedModule } from './userspayed/userspayed.module';
import { PrismalogicModule } from './prismalogic/prismalogic.module';
import { UserswanttopayModule } from './userswanttopay/userswanttopay.module';

@Module({
  imports: [PrismalogicModule, UserspayedModule, PrismalogicModule, UserswanttopayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

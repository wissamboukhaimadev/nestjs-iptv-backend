import { Module } from '@nestjs/common';
import { UserspayedService } from './services/userspayed/userspayed.service';
import { UserspayedController } from './controller/userspayed/userspayed.controller';
import { PrismalogicModule } from 'src/prismalogic/prismalogic.module';

@Module({
  imports: [PrismalogicModule],
  providers: [UserspayedService],
  controllers: [UserspayedController]
})
export class UserspayedModule { }

import { Module } from '@nestjs/common';
import { PrismalogicService } from './prismalogic.service';

@Module({
  providers: [PrismalogicService],
  exports: [PrismalogicService]
})
export class PrismalogicModule { }

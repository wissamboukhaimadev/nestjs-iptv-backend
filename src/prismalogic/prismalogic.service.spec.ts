import { Test, TestingModule } from '@nestjs/testing';
import { PrismalogicService } from './prismalogic.service';

describe('PrismalogicService', () => {
  let service: PrismalogicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismalogicService],
    }).compile();

    service = module.get<PrismalogicService>(PrismalogicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UsersWantToPayService } from './users-want-to-pay.service';

describe('UsersWantToPayService', () => {
  let service: UsersWantToPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersWantToPayService],
    }).compile();

    service = module.get<UsersWantToPayService>(UsersWantToPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

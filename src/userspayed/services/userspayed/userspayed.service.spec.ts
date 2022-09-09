import { Test, TestingModule } from '@nestjs/testing';
import { UserspayedService } from './userspayed.service';

describe('UserspayedService', () => {
  let service: UserspayedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserspayedService],
    }).compile();

    service = module.get<UserspayedService>(UserspayedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

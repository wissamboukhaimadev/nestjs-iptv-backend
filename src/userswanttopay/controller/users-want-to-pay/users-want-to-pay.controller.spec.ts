import { Test, TestingModule } from '@nestjs/testing';
import { UsersWantToPayController } from './users-want-to-pay.controller';

describe('UsersWantToPayController', () => {
  let controller: UsersWantToPayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersWantToPayController],
    }).compile();

    controller = module.get<UsersWantToPayController>(UsersWantToPayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

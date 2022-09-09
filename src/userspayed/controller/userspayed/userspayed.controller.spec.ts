import { Test, TestingModule } from '@nestjs/testing';
import { UserspayedController } from './userspayed.controller';

describe('UserspayedController', () => {
  let controller: UserspayedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserspayedController],
    }).compile();

    controller = module.get<UserspayedController>(UserspayedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

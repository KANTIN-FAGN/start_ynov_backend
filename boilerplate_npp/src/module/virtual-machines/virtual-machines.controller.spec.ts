import { Test, TestingModule } from '@nestjs/testing';
import { VirtualMachinesController } from './virtual-machines.controller';
import { VirtualMachinesService } from './virtual-machines.service';

describe('VirtualMachinesController', () => {
  let controller: VirtualMachinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VirtualMachinesController],
      providers: [VirtualMachinesService],
    }).compile();

    controller = module.get<VirtualMachinesController>(VirtualMachinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

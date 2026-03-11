import { Test, TestingModule } from '@nestjs/testing';
import { VirtualMachinesService } from './virtual-machines.service';

describe('VirtualMachinesService', () => {
  let service: VirtualMachinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VirtualMachinesService],
    }).compile();

    service = module.get<VirtualMachinesService>(VirtualMachinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

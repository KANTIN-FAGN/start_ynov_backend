import { Module } from '@nestjs/common';
import { VirtualMachinesService } from './virtual-machines.service';
import { VirtualMachinesController } from './virtual-machines.controller';

@Module({
  controllers: [VirtualMachinesController],
  providers: [VirtualMachinesService],
})
export class VirtualMachinesModule {}

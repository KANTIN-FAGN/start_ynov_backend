import { Injectable } from '@nestjs/common';
import { CreateVirtualMachineDto } from './dto/create-virtual-machine.dto';
import { UpdateVirtualMachineDto } from './dto/update-virtual-machine.dto';

@Injectable()
export class VirtualMachinesService {
  create(createVirtualMachineDto: CreateVirtualMachineDto) {
    return 'This action adds a new virtualMachine';
  }

  findAll() {
    return `This action returns all virtualMachines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} virtualMachine`;
  }

  update(id: number, updateVirtualMachineDto: UpdateVirtualMachineDto) {
    return `This action updates a #${id} virtualMachine`;
  }

  remove(id: number) {
    return `This action removes a #${id} virtualMachine`;
  }
}

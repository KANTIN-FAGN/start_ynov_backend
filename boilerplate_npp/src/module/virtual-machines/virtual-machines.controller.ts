import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VirtualMachinesService } from './virtual-machines.service';
import { CreateVirtualMachineDto } from './dto/create-virtual-machine.dto';
import { UpdateVirtualMachineDto } from './dto/update-virtual-machine.dto';

@Controller('virtual-machines')
export class VirtualMachinesController {
  constructor(private readonly virtualMachinesService: VirtualMachinesService) {}

  @Post()
  create(@Body() createVirtualMachineDto: CreateVirtualMachineDto) {
    return this.virtualMachinesService.create(createVirtualMachineDto);
  }

  @Get()
  findAll() {
    return this.virtualMachinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.virtualMachinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVirtualMachineDto: UpdateVirtualMachineDto) {
    return this.virtualMachinesService.update(+id, updateVirtualMachineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.virtualMachinesService.remove(+id);
  }
}

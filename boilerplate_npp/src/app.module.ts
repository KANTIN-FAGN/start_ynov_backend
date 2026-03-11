import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './module/users/users.module';
import { VirtualMachineModule } from './module/virtual-machines/virtual-machine.module';
import { VirtualMachinesModule } from './module/virtual-machines/virtual-machines.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    VirtualMachineModule,
    VirtualMachinesModule
  ],
})
export class AppModule {}

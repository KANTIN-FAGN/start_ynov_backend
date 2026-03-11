
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { ERROR } from "../../common/constants/error.constants";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({
            data: {
                ...createUserDto,
            },
            omit: {
                password: true,
            },
        });
    }

    async findAll() {
        return this.prisma.user.findMany({
            omit: {
                password: true,
            },
        });
    }

    async findOne(uid: string) {
        const user = await this.prisma.user.findUnique({
            where: { uid },
            omit: {
                password: true,
            },
        });

        if (!user) {
            throw new NotFoundException(ERROR.ResourceNotFound);
        }

        return user;
    }

    async update(uid: string, updateUserDto: UpdateUserDto) {
        await this.findOne(uid);

        return this.prisma.user.update({
            where: { uid },
            data: {
                ...updateUserDto,
            },
            omit: {
                password: true,
            },
        });
    }

    async remove(uid: string) {
        await this.findOne(uid);

        return this.prisma.user.delete({
            where: { uid },
            omit: {
                password: true,
            },
        });
    }
}
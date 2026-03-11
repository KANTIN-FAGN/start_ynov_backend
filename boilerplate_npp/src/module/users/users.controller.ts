
import { Body, Controller, Delete, Get, Param, Post, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully', type: UserEntity })
    @ApiResponse({ status: 400, description: 'Invalid input' })
    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return new UserEntity(await this.usersService.create(createUserDto));
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of users', type: [UserEntity] })
    async findAll(): Promise<UserEntity[]> {
        const users = await this.usersService.findAll();
        return users.map((user) => new UserEntity(user));
    }

    @Get(':uid')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiResponse({ status: 200, description: 'User found', type: UserEntity })
    @ApiResponse({ status: 404, description: 'User not found' })
    async findOne(@Param('uid') uid: string): Promise<UserEntity> {
        return new UserEntity(await this.usersService.findOne(uid));
    }

    @Put(':uid')
    @ApiOperation({ summary: 'Update a user' })
    @ApiResponse({ status: 200, description: 'User updated', type: UserEntity })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiResponse({ status: 400, description: 'Invalid input' })
    async update(
        @Param('uid') uid: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return new UserEntity(await this.usersService.update(uid, updateUserDto));
    }

    @Delete(':uid')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete a user' })
    @ApiResponse({ status: 204, description: 'User deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async remove(@Param('uid') uid: string): Promise<void> {
        await this.usersService.remove(uid);
    }
}
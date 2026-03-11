import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNumber, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'User email',
        example: 'user@example.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'User password',
        example: 'password123',
    })
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty({
        description: 'User first name',
        example: 'John',
    })
    @IsString()
    firstname: string;

    @ApiProperty({
        description: 'User last name',
        example: 'Doe',
    })
    @IsString()
    lastname: string;

    @ApiProperty({
        description: 'Role ID',
        example: 1,
    })
    @IsNumber()
    roleId: number;
}
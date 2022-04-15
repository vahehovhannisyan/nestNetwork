
import { IsEmail, IsNotEmpty, IsString, IS_NUMBER_STRING } from 'class-validator';
import { PickType} from '@nestjs/swagger';

export class UserDto {

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    surname:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    //@IsString()
    //@IsNotEmpty()
    photo:string;

};

export class signInUserDto extends PickType(UserDto, ['email', 'password'] as const) {}
export class currentUserDto extends PickType(UserDto, ['name', 'surname'] as const) {}




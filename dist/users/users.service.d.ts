import { UserDto, signInUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private jwt;
    private config;
    constructor(jwt: JwtService, config: ConfigService);
    signUp(dto: UserDto): Promise<{
        access_token: string;
    } | {
        msg: any;
    }>;
    signIn(dto: signInUserDto): Promise<{
        access_token: string;
    }>;
    uploadFile(photoData: any, userData: any): Promise<void>;
    userDelete(userData: any): Promise<{
        msg: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}

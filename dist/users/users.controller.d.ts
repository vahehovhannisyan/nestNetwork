import { UsersService } from './users.service';
import { UserDto, signInUserDto } from './dto';
import { User } from '../../models/';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(dto: UserDto): Promise<{
        access_token: string;
    } | {
        msg: any;
    }>;
    signIn(dto: signInUserDto): Promise<{
        access_token: string;
    }>;
    getMe(user: User): {
        user: {
            name: any;
            surname: any;
        };
    };
    uploadFile(file: any, user: User): Promise<void>;
    delete(user: User): Promise<{
        msg: string;
    }>;
}

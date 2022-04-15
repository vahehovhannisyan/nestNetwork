export declare class UserDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    photo: string;
}
declare const signInUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "email" | "password">>;
export declare class signInUserDto extends signInUserDto_base {
}
declare const currentUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "surname">>;
export declare class currentUserDto extends currentUserDto_base {
}
export {};

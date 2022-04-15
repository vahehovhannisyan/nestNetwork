import {Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe, UseGuards, UseInterceptors, UploadedFile, ConsoleLogger, Put } from '@nestjs/common';
import {UsersService} from './users.service';
import {UserDto, signInUserDto} from './dto';
import {User} from '../../models/';
import {JwtGuard} from './guard';
import {getUser} from './decorator';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Request } from '@nestjs/common';

// interface IGetUserAuthInfoRequest extends Request {
//   user: string // or any other type
// }

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


      // @Post('signup')
      // signUp(@Req() req:Request) {
      //   console.log(req.body)
      //   return this.usersService.signUp();
      // }
      

      // @Post('signup')
      // signUp(
      //   @Body("email") email:string,
      //   @Body("password", ParseIntPipe) password:string
        
      // ) {
      //   console.log({
      //     email,
      //     typeOfEmail: typeof email,
      //     password,
      //     typeOfPassword: typeof password
      //   })
      //   return this.usersService.signUp();
      // }

        @Post('signup')
        signUp(@Body() dto:UserDto ) {
            return this.usersService.signUp(dto);
        };

        @Post('signin')
        signIn(@Body() dto:signInUserDto) {
            // console.log(req)
            console.log("check ", dto)
            //req.user;
            return this.usersService.signIn(dto);
        };

        @Get('currentUser')
        @UseGuards(JwtGuard)
        getMe(@getUser('') user:User ) { 
             return {user:{name:user.name, surname:user.surname}}
            //  return user
        };


        // @Get('currentUser')
        // @UseGuards(JwtGuard)
        // getMe(@Req() req:IGetUserAuthInfoRequest ) { 

        //     console.log({
        //         user:req.user
        //     })
           
        // };

        @Put('upload')
        @UseGuards(JwtGuard)
        @UseInterceptors(FileInterceptor('file', {
            storage:diskStorage({
                destination:'./uploads/profileImages',
                filename:(req, file, cb) => {
                    const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                    const extension: string = path.parse(file.originalname).ext;                  
                    cb(null, `${filename}${extension}`)
                }
            })

        }))

        @UseGuards(JwtGuard)
        uploadFile(@UploadedFile() file,  @getUser('') user:User){
            return this.usersService.uploadFile({imagePath:file.filename}, user)
            //return {imagePath:file.filename}
        };

        @Delete('api')
        @UseGuards(JwtGuard)
        delete(@getUser('') user:User){
            return this.usersService.userDelete(user)
        };

  }
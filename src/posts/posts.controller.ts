import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto';
import {User} from '../../models/';
import { getUser } from '../users/decorator';
import { JwtGuard } from '../users/guard';


@Controller('posts')
export class PostsController {
    
    constructor(private readonly postsService: PostsService) {}

    @Post('api')
    @UseGuards(JwtGuard)
    createPost(@Body() dto:PostDto, @getUser('') user:User) {
        return this.postsService.createPost(dto, user)
    }


    @Delete('api')
    @UseGuards(JwtGuard)
    deletePost(@Body('post_id') dto:number) {
        return this.postsService.deletePost(dto)       
    }


    @Put('api')
    @UseGuards(JwtGuard)
    updatePost (@Body('post_id') post_id:number, @Body('post') updatingPost:string) {
        return this.postsService.updatePost(post_id, updatingPost)       
    }

}





// getMe(@getUser('') user:User ) {
//     return user
// };

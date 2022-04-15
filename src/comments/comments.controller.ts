import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto';
import { JwtGuard } from '../users/guard';
import { getUser } from 'src/users/decorator';
import {User} from '../../models/';


@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('create')
  @UseGuards(JwtGuard)
  create(@Body() dto:CommentDto, @getUser('') user:User ) {
    return this.commentsService.createComment(dto, user);
  }


  @Delete('api')
  @UseGuards(JwtGuard)
  delete(@Body('post_id') dto:number) {
    return this.commentsService.deleteComment(dto)       
}



  //@Delete('api')



  
}

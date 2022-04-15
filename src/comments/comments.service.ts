import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto';
import {Comment} from '../../models/';
import {User, Post} from '../../models/';

@Injectable()
export class CommentsService {

      async createComment(dto:CommentDto, userData:User ) {
          try {
              const user_id = userData.id;
              const post = await Post.findOne({where:{id:dto.post_id}})
              if(post == null) {
                throw `post with id ${dto.post_id} does not exist`
              } 
              const comment = await Comment.create({
                user_id,
                post_id:dto.post_id,
                comment:dto.comment,
              })
              return {msg:'comment created', comment:{user_id:comment.user_id, post_id:comment.post_id, comment:comment.comment}}    
          } catch (err) {

              return {msg:err}
          }   
      }

      async deleteComment (dto:number) {

          console.log(dto)

      }

 

}

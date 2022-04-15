import { Injectable } from '@nestjs/common';
import { PostDto } from './dto';
import {Post, User} from '../../models/';

@Injectable()
export class PostsService {

    async createPost (dto:PostDto, userData:User) {
        try{
            const userId = userData.id
            const post  = await Post.create({
                post:dto.post,
                userId
            })
            return {msg:"post created", post:{user_id:post.userId, post:post.post}}
        }catch(err){
            return {msg:err}
        } 
    };

    async deletePost (postId:number) {
        try {
            const deletedPost = await Post.destroy({where:{id:postId}});
            if(deletedPost==0){
              throw `post with id ${postId} does not exist`
            }
            return {msg:`post with id ${postId} deleted`}
        } catch (err) {
            return {msg:err}
        }    
    };


    async updatePost (postId:number, updatingPost:string) {

        try {
            await Post.update({post:updatingPost}, {where:{id:postId}})
            const post = await Post.findOne({where:{id:postId}, attributes:[ 'post', 'userId']} )
            return {msg:'post updated', updatedPost:post}
            
        }catch(err){
            return {msg:err}
        }

    };

}

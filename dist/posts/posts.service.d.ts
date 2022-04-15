import { PostDto } from './dto';
import { User } from '../../models/';
export declare class PostsService {
    createPost(dto: PostDto, userData: User): Promise<{
        msg: string;
        post: {
            user_id: any;
            post: any;
        };
    } | {
        msg: any;
        post?: undefined;
    }>;
    deletePost(postId: number): Promise<{
        msg: any;
    }>;
    updatePost(postId: number, updatingPost: string): Promise<{
        msg: string;
        updatedPost: any;
    } | {
        msg: any;
        updatedPost?: undefined;
    }>;
}

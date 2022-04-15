import { PostsService } from './posts.service';
import { PostDto } from './dto';
import { User } from '../../models/';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(dto: PostDto, user: User): Promise<{
        msg: string;
        post: {
            user_id: any;
            post: any;
        };
    } | {
        msg: any;
        post?: undefined;
    }>;
    deletePost(dto: number): Promise<{
        msg: any;
    }>;
    updatePost(post_id: number, updatingPost: string): Promise<{
        msg: string;
        updatedPost: any;
    } | {
        msg: any;
        updatedPost?: undefined;
    }>;
}

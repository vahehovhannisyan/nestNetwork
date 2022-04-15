import { CommentDto } from './dto';
import { User } from '../../models/';
export declare class CommentsService {
    createComment(dto: CommentDto, userData: User): Promise<{
        msg: string;
        comment: {
            user_id: any;
            post_id: any;
            comment: any;
        };
    } | {
        msg: any;
        comment?: undefined;
    }>;
    deleteComment(dto: number): Promise<void>;
}

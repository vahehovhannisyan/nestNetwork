import { CommentsService } from './comments.service';
import { CommentDto } from './dto';
import { User } from '../../models/';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(dto: CommentDto, user: User): Promise<{
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
    delete(dto: number): Promise<void>;
}

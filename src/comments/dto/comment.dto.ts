import { IsNotEmpty } from 'class-validator';
import { PickType} from '@nestjs/swagger';

export class CommentDto {

    //@IsNotEmpty()
    user_id:number;
    
    @IsNotEmpty()
    post_id:number;
    
    @IsNotEmpty()
    comment:string;

}

export class deleteCommentDto extends PickType(CommentDto, ['post_id'] as const) {}
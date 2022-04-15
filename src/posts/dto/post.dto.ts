
import { IsNotEmpty } from 'class-validator';
import { PickType} from '@nestjs/swagger';

export class PostDto {
    
    post_id:number
    
    //@IsNotEmpty()
    userId:number;
    
    @IsNotEmpty()
    post:string;

};

//export class updatePostDto extends PickType(PostDto, ['post_id'] as const) {}




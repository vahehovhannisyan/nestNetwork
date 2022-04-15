export declare class CommentDto {
    user_id: number;
    post_id: number;
    comment: string;
}
declare const deleteCommentDto_base: import("@nestjs/common").Type<Pick<CommentDto, "post_id">>;
export declare class deleteCommentDto extends deleteCommentDto_base {
}
export {};

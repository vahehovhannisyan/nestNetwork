"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../models/");
let PostsService = class PostsService {
    async createPost(dto, userData) {
        try {
            const userId = userData.id;
            const post = await models_1.Post.create({
                post: dto.post,
                userId
            });
            return { msg: "post created", post: { user_id: post.userId, post: post.post } };
        }
        catch (err) {
            return { msg: err };
        }
    }
    ;
    async deletePost(postId) {
        try {
            const deletedPost = await models_1.Post.destroy({ where: { id: postId } });
            if (deletedPost == 0) {
                throw `post with id ${postId} does not exist`;
            }
            return { msg: `post with id ${postId} deleted` };
        }
        catch (err) {
            return { msg: err };
        }
    }
    ;
    async updatePost(postId, updatingPost) {
        try {
            await models_1.Post.update({ post: updatingPost }, { where: { id: postId } });
            const post = await models_1.Post.findOne({ where: { id: postId }, attributes: ['post', 'userId'] });
            return { msg: 'post updated', updatedPost: post };
        }
        catch (err) {
            return { msg: err };
        }
    }
    ;
};
PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map
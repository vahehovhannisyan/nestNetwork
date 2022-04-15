"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../models/");
const models_2 = require("../../models/");
let CommentsService = class CommentsService {
    async createComment(dto, userData) {
        try {
            const user_id = userData.id;
            const post = await models_2.Post.findOne({ where: { id: dto.post_id } });
            if (post == null) {
                throw `post with id ${dto.post_id} does not exist`;
            }
            const comment = await models_1.Comment.create({
                user_id,
                post_id: dto.post_id,
                comment: dto.comment,
            });
            return { msg: 'comment created', comment: { user_id: comment.user_id, post_id: comment.post_id, comment: comment.comment } };
        }
        catch (err) {
            return { msg: err };
        }
    }
    async deleteComment(dto) {
        console.log(dto);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)()
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map
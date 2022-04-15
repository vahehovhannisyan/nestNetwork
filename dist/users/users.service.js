"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../models/");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let UsersService = class UsersService {
    constructor(jwt, config) {
        this.jwt = jwt;
        this.config = config;
    }
    async signUp(dto) {
        try {
            const hash = await argon.hash(dto.password);
            const user = await models_1.User.create({
                name: dto.name,
                surname: dto.surname,
                email: dto.email,
                password: hash,
                photo: dto.photo
            });
            return this.signToken(user.id, user.email);
        }
        catch (err) {
            return { msg: err.errors[0].message };
        }
    }
    ;
    async signIn(dto) {
        const user = await models_1.User.findOne({ where: { email: dto.email } });
        if (!user)
            throw new common_1.ForbiddenException("There is no such user with that email");
        const matches = await argon.verify(user.password, dto.password);
        if (matches) {
            return this.signToken(user.id, user.email);
        }
        else {
            throw new common_1.ForbiddenException("Incorrect password");
        }
    }
    ;
    async uploadFile(photoData, userData) {
        const userId = userData.id;
        await models_1.User.update({
            photo: photoData.imagePath
        }, {
            where: {
                id: userId
            }
        });
    }
    ;
    async userDelete(userData) {
        const userId = userData.id;
        await models_1.User.destroy({ where: { id: userId } });
        return { msg: 'user deleted' };
    }
    ;
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, { expiresIn: '240m', secret: secret });
        return {
            access_token: token
        };
    }
    ;
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
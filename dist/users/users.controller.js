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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const dto_1 = require("./dto");
const models_1 = require("../../models/");
const guard_1 = require("./guard");
const decorator_1 = require("./decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const uuid_1 = require("uuid");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    signUp(dto) {
        return this.usersService.signUp(dto);
    }
    ;
    signIn(dto) {
        console.log("check ", dto);
        return this.usersService.signIn(dto);
    }
    ;
    getMe(user) {
        return { user: { name: user.name, surname: user.surname } };
    }
    ;
    uploadFile(file, user) {
        return this.usersService.uploadFile({ imagePath: file.filename }, user);
    }
    ;
    delete(user) {
        return this.usersService.userDelete(user);
    }
    ;
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.signInUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('currentUser'),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    __param(0, (0, decorator_1.getUser)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Put)('upload'),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/profileImages',
            filename: (req, file, cb) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '') + (0, uuid_1.v4)();
                const extension = path.parse(file.originalname).ext;
                cb(null, `${filename}${extension}`);
            }
        })
    })),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, decorator_1.getUser)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Delete)('api'),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    __param(0, (0, decorator_1.getUser)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
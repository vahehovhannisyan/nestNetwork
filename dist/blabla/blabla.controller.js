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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlablaController = void 0;
const common_1 = require("@nestjs/common");
const blabla_service_1 = require("./blabla.service");
const create_blabla_dto_1 = require("./dto/create-blabla.dto");
const update_blabla_dto_1 = require("./dto/update-blabla.dto");
let BlablaController = class BlablaController {
    constructor(blablaService) {
        this.blablaService = blablaService;
    }
    create(createBlablaDto) {
        return this.blablaService.create(createBlablaDto);
    }
    findAll() {
        return this.blablaService.findAll();
    }
    findOne(id) {
        return this.blablaService.findOne(+id);
    }
    update(id, updateBlablaDto) {
        return this.blablaService.update(+id, updateBlablaDto);
    }
    remove(id) {
        return this.blablaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blabla_dto_1.CreateBlablaDto]),
    __metadata("design:returntype", void 0)
], BlablaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlablaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlablaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blabla_dto_1.UpdateBlablaDto]),
    __metadata("design:returntype", void 0)
], BlablaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlablaController.prototype, "remove", null);
BlablaController = __decorate([
    (0, common_1.Controller)('blabla'),
    __metadata("design:paramtypes", [blabla_service_1.BlablaService])
], BlablaController);
exports.BlablaController = BlablaController;
//# sourceMappingURL=blabla.controller.js.map
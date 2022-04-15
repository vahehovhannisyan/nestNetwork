import { BlablaService } from './blabla.service';
import { CreateBlablaDto } from './dto/create-blabla.dto';
import { UpdateBlablaDto } from './dto/update-blabla.dto';
export declare class BlablaController {
    private readonly blablaService;
    constructor(blablaService: BlablaService);
    create(createBlablaDto: CreateBlablaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBlablaDto: UpdateBlablaDto): string;
    remove(id: string): string;
}

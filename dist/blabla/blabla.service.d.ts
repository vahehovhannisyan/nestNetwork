import { CreateBlablaDto } from './dto/create-blabla.dto';
import { UpdateBlablaDto } from './dto/update-blabla.dto';
export declare class BlablaService {
    create(createBlablaDto: CreateBlablaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBlablaDto: UpdateBlablaDto): string;
    remove(id: number): string;
}

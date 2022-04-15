import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotosService {
    create(createPhotoDto: CreatePhotoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePhotoDto: UpdatePhotoDto): string;
    remove(id: number): string;
}

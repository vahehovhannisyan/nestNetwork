import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhotoDto: CreatePhotoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePhotoDto: UpdatePhotoDto): string;
    remove(id: string): string;
}

import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(createRegistrationDto: CreateRegistrationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: string): string;
}

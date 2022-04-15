import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
export declare class FriendsController {
    private readonly friendsService;
    constructor(friendsService: FriendsService);
    create(createFriendDto: CreateFriendDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFriendDto: UpdateFriendDto): string;
    remove(id: string): string;
}

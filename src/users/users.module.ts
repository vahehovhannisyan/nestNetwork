import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config'
import { JwtStrategy } from './strategy';
import {User} from '../../models/';

@Module({
  imports:[JwtModule.register({})],
  controllers: [UsersController],
  providers: [UsersService, ConfigService, JwtStrategy, User]
})
export class UsersModule {}

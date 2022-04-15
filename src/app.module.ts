import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { PhotosModule } from './photos/photos.module';
import { FriendsModule } from './friends/friends.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [ ConfigModule.forRoot(), PostsModule, CommentsModule, PhotosModule, FriendsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

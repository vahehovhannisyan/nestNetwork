import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {ConfigService} from '@nestjs/config';
import {User} from '../../../models/';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(config:ConfigService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        //   ignoreExpiration: false,
          secretOrKey: config.get('JWT_SECRET'),
        });
      }

      async validate (payload:any) {     
          const  user = await User.findOne({where:{id:payload.sub}});
          if(!user) {
            throw new UnauthorizedException()
          }
            return user;
            // return payload
         
      };
}
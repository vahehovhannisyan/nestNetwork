import {ForbiddenException, Injectable} from '@nestjs/common';
import {UserDto, signInUserDto} from './dto';
import {User} from '../../models/';
import * as argon from 'argon2';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config'

@Injectable()
export class UsersService {
        constructor(
             //private UserService: User,
             private jwt:JwtService,
             private config:ConfigService,
        ) {}

        async signUp (dto:UserDto) {
            try{
                const hash = await argon.hash(dto.password);
                const user = await User.create({
                    name:dto.name, 
                    surname:dto.surname, 
                    email:dto.email, 
                    password:hash, 
                    photo:dto.photo     
                })
                return this.signToken(user.id, user.email)
                // return {msg:`sucessfully signed up, ${  this.signToken(user.id, user.email)}`}   

            }catch(err){
                return {msg: err.errors[0].message}     
            }
         
        };


        async signIn (dto:signInUserDto) {
            
            const user =  await User.findOne({where:{email:dto.email}});
            if(!user) throw new ForbiddenException("There is no such user with that email");
            const matches = await argon.verify(user.password, dto.password);

            if(matches){

                //console.log("user checking", user)
                // delete user.password;
                // delete user.createdAt;
                // delete user.updatedAt;
                //return {msg:`you have sucessfully signed in` + ` ${this.signToken(user.id, user.email)}`} 
                return this.signToken(user.id, user.email)   
            }else{
                throw new ForbiddenException("Incorrect password")
            }     
           
        };

        async uploadFile(photoData, userData) {

            const userId = userData.id;
             await User.update({
                photo: photoData.imagePath
            }, {
                where: {
                    id: userId
                }
            })

        };

        async userDelete(userData) {
            const userId = userData.id;
            await User.destroy({where:{id:userId}});
            return {msg:'user deleted'}
        };


        async signToken (userId:number, email:string): Promise<{access_token:string}> {
            const payload = {
                sub:userId,
                email,
            };
            //console.log( process.env.JWT_SECRET)
            const secret = this.config.get('JWT_SECRET')

            const token = await this.jwt.signAsync(payload, {expiresIn:'240m', secret:secret})

            return {
               // msg:`you have sucessfully signed in`,
                access_token:token 
            };
        }; 

}
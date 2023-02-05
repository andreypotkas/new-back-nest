import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ){}
  
  async login(walletAddress: string): Promise<UserDocument> {
    const user = this.findOne(walletAddress);

    return user ? user : this.create(walletAddress);
  }

  async create(walletAddress: string): Promise<UserDocument> {
      const createdUser = new this.userModel(walletAddress);
      return createdUser.save();
  }

  findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  findOne(walletAddress: string): Promise<UserDocument> {    
    return this.userModel.findOne({walletAddress}).exec();
  }

  update(walletAddress: string, updateUserDto: UpdateUserDto) {    
    return this.userModel.findOneAndUpdate({ walletAddress }, updateUserDto, {new: true})
  }

  public createJWT(user: UserDocument) {
    // prop _id exist only in UserDocument
    const payload = { userId: user._id, sub: user.walletAddress };
    return {
      access_token: this.jwtService.sign(payload),
    };
  };
}

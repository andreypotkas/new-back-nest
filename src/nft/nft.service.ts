import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { Nft, NftDocument } from './schemas/nft.schema';

@Injectable()
export class NftService {
  constructor(
    @InjectModel(Nft.name) private nftModel: Model<NftDocument>,
  ){}

  async create(walletAddress: string): Promise<NftDocument> {
      const createdNft = new this.nftModel(walletAddress);
      return createdNft.save();
  }

  findAll(): Promise<NftDocument[]> {
    return this.nftModel.find().exec();
  }

  findMy(autherAddress: string): Promise<NftDocument[]> {
    return this.nftModel.find({autherAddress}).exec();
  }

  findOne(id: string): Promise<NftDocument> {    
    return this.nftModel.findById(id).exec();
  }

  update(id: string, updateNftDto: UpdateNftDto) {   
    console.log(id, updateNftDto);
     
    return this.nftModel.findByIdAndUpdate(id, updateNftDto, {new: true})
  }

  remove(id: string){
    return this.nftModel.findByIdAndRemove(id);
  }
}

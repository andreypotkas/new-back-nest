import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBuyOfferDto } from './dto/create-buy-offer.dto';
import { UpdateBuyOfferDto } from './dto/update-buy-offer.dto';
import { BuyOffer, BuyOfferDocument } from './schemas/buy-offer.schema';

@Injectable()
export class BuyOfferService {
  constructor(
    @InjectModel(BuyOffer.name) private buyOfferModel: Model<BuyOfferDocument>,
  ){}

  async create(createBuyOfferDto: CreateBuyOfferDto): Promise<BuyOfferDocument> {
      const createdBuyOffer = new this.buyOfferModel(createBuyOfferDto);
      return createdBuyOffer.save();
  }

  findAll(): Promise<BuyOfferDocument[]> {
    return this.buyOfferModel.find().exec();
  }

  findOne(id: string): Promise<BuyOfferDocument> {    
    return this.buyOfferModel.findById(id).exec();
  }

  remove(id: string){
    return this.buyOfferModel.findByIdAndRemove(id);
  }
}

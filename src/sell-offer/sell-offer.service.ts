import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellOfferDto } from './dto/create-sell-offer.dto';
import { SellOffer, SellOfferDocument } from './schemas/sell-offer.schema';

@Injectable()
export class SellOfferService {
  constructor(
    @InjectModel(SellOffer.name) private sellOfferModel: Model<SellOfferDocument>,
  ){}

  async create(createSellOfferDto: CreateSellOfferDto): Promise<SellOfferDocument> {
      const createdSellOffer = new this.sellOfferModel(createSellOfferDto);
      return createdSellOffer.save();
  }

  findAll(): Promise<SellOfferDocument[]> {
    return this.sellOfferModel.find().exec();
  }

  findOne(id: string): Promise<SellOfferDocument> {    
    return this.sellOfferModel.findById(id).exec();
  }

  remove(id: string){
    return this.sellOfferModel.findByIdAndRemove(id);
  }
}

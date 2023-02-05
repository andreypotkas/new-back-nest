import { Module } from '@nestjs/common';
import { BuyOfferService } from './buy-offer.service';
import { BuyOfferController } from './buy-offer.controller';
import { BuyOffer, BuyOfferSchema } from './schemas/buy-offer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[   
    MongooseModule.forFeature([{ name: BuyOffer.name, schema: BuyOfferSchema }]),
  ],
  controllers: [BuyOfferController],
  providers: [BuyOfferService]
})
export class BuyOfferModule {}

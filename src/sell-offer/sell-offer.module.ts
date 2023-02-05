import { Module } from '@nestjs/common';
import { SellOfferService } from './sell-offer.service';
import { SellOfferController } from './sell-offer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SellOffer, SellOfferSchema } from './schemas/sell-offer.schema';

@Module({
  imports:[   
    MongooseModule.forFeature([{ name: SellOffer.name, schema: SellOfferSchema }]),
  ],
  controllers: [SellOfferController],
  providers: [SellOfferService]
})
export class SellOfferModule {}

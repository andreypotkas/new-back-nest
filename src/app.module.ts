import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NftModule } from './nft/nft.module';
import { SellOfferModule } from './sell-offer/sell-offer.module';
import { BuyOfferModule } from './buy-offer/buy-offer.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', { dbName:'amped' }),
    UserModule,
    NftModule,
    SellOfferModule,
    BuyOfferModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

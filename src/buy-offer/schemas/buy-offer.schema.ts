import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BuyOfferDocument = HydratedDocument<BuyOffer>;

@Schema(({ timestamps: true }))
export class BuyOffer {
  @Prop()
  offerCreated: string;

  @Prop()
  offerReceived: string;

  @Prop()
  tokenId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Nft' })
  nft: string;

  @Prop()
  amount: string;
}

export const BuyOfferSchema = SchemaFactory.createForClass(BuyOffer);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SellOfferDocument = HydratedDocument<SellOffer>;

@Schema(({ timestamps: true }))
export class SellOffer {
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

export const SellOfferSchema = SchemaFactory.createForClass(SellOffer);
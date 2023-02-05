import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NftDocument = HydratedDocument<Nft>;

@Schema(({ timestamps: true }))
export class Nft {
  @Prop()
  ownerAddress: string; // Add prop front part

  @Prop()
  autherAddress: string;

  @Prop()
  artistName: string;

  @Prop()
  songName: string;

  @Prop()
  thumbnail: string;
  
  @Prop()
  url: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()
  tokenId: string;

  @Prop()
  bpm: string;

  @Prop()
  genre: string;
  
  @Prop()
  instruments: string;

  @Prop()
  key: string;

  @Prop()
  category: string;
}

export const NftSchema = SchemaFactory.createForClass(Nft);
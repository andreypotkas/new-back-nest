import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema(({ timestamps: true }))
export class Notification {
  @Prop()
  sender: string;

  @Prop()
  receiver: string;

  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Nft' })
  nftId: string;

  @Prop()
  view: boolean;

  @Prop()
  sellOfferId: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
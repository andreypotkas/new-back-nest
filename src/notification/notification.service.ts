import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification, NotificationDocument } from './schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
  ){}

  async create(createNotificationDto: CreateNotificationDto): Promise<NotificationDocument> {
      const createdNotification = new this.notificationModel(createNotificationDto);
      return createdNotification.save();
  }

  findAll(): Promise<NotificationDocument[]> {
    return this.notificationModel.find().exec();
  }

  findMy(autherAddress: string): Promise<NotificationDocument[]> {
    return this.notificationModel.find({autherAddress}).exec();
  }

  findOne(id: string): Promise<NotificationDocument> {    
    return this.notificationModel.findById(id).exec();
  }

  remove(id: string){
    return this.notificationModel.findByIdAndRemove(id);
  }
}

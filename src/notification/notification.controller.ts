import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Req } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { IJwtPayload } from 'src/user/interfaces/user.interface';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('')
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.notificationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  findMy(@Req() req: Request) {
      // wallet address and userId extracted from jwt 
      const user = req.user as IJwtPayload;
    return this.notificationService.findMy(user.walletAddress);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Query() param: {id: string}) {    
    return this.notificationService.findOne(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('')
  remove(@Query() param: {id: string}) {
    return this.notificationService.remove(param.id);
  }
}

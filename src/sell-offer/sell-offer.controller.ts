import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { SellOfferService } from './sell-offer.service';
import { CreateSellOfferDto } from './dto/create-sell-offer.dto';
import { UpdateSellOfferDto } from './dto/update-sell-offer.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { IJwtPayload } from 'src/user/interfaces/user.interface';
import { Request } from 'express';

@Controller('sell-offer')
export class SellOfferController {
  constructor(private readonly sellOfferService: SellOfferService) {}

  @Post('')
  async create(@Body() createSellOfferDto: CreateSellOfferDto) {
    return this.sellOfferService.create(createSellOfferDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.sellOfferService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Query() param: {id: string}) {    
    return this.sellOfferService.findOne(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('')
  remove(@Query() param: {id: string}) {
    return this.sellOfferService.remove(param.id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { BuyOfferService } from './buy-offer.service';
import { CreateBuyOfferDto } from './dto/create-buy-offer.dto';

@Controller('buy-offer')
export class BuyOfferController {
  constructor(private readonly buyOfferService: BuyOfferService) {}

  @Post('')
  async create(@Body() createBuyOfferDto: CreateBuyOfferDto) {
    return this.buyOfferService.create(createBuyOfferDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.buyOfferService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Query() param: {id: string}) {    
    return this.buyOfferService.findOne(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('')
  remove(@Query() param: {id: string}) {
    return this.buyOfferService.remove(param.id);
  }
}

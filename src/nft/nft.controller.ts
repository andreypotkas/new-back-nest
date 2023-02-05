import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { NftService } from './nft.service';
import { UpdateNftDto } from './dto/update-nft.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { IJwtPayload } from 'src/user/interfaces/user.interface';
import { Request } from 'express';


@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.nftService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  findMy(@Req() req: Request) {
      // wallet address and userId extracted from jwt 
      const user = req.user as IJwtPayload;
    return this.nftService.findMy(user.walletAddress);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Query() param: {id: string}) {    
    return this.nftService.findOne(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('')
  update(@Body() updateNftDto: UpdateNftDto, @Query() param: {id: string}) {    
    return this.nftService.update(param.id, updateNftDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('')
  remove(@Query() param: {id: string}) {
    return this.nftService.remove(param.id);
  }
}

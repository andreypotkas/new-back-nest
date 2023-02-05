import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { IJwtPayload } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.login(createUserDto.walletAddress);
    const token = this.userService.createJWT(user);
    return { token, user};
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Req() req: Request) {
    // wallet address and userId extracted from jwt 
    const user = req.user as IJwtPayload;

    return this.userService.findOne(user.walletAddress);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('')
  update(@Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
    const user = req.user as IJwtPayload;

    return this.userService.update(user.walletAddress, updateUserDto);
  }
}

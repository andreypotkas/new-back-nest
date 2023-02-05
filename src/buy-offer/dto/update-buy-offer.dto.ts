import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyOfferDto } from './create-buy-offer.dto';

export class UpdateBuyOfferDto extends PartialType(CreateBuyOfferDto) {}

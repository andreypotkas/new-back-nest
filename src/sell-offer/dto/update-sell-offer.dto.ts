import { PartialType } from '@nestjs/mapped-types';
import { CreateSellOfferDto } from './create-sell-offer.dto';

export class UpdateSellOfferDto extends PartialType(CreateSellOfferDto) {}

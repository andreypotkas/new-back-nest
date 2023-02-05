import { Test, TestingModule } from '@nestjs/testing';
import { BuyOfferController } from './buy-offer.controller';
import { BuyOfferService } from './buy-offer.service';

describe('BuyOfferController', () => {
  let controller: BuyOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyOfferController],
      providers: [BuyOfferService],
    }).compile();

    controller = module.get<BuyOfferController>(BuyOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

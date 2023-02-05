import { Test, TestingModule } from '@nestjs/testing';
import { SellOfferController } from './sell-offer.controller';
import { SellOfferService } from './sell-offer.service';

describe('SellOfferController', () => {
  let controller: SellOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellOfferController],
      providers: [SellOfferService],
    }).compile();

    controller = module.get<SellOfferController>(SellOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

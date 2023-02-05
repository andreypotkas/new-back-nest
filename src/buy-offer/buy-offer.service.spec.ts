import { Test, TestingModule } from '@nestjs/testing';
import { BuyOfferService } from './buy-offer.service';

describe('BuyOfferService', () => {
  let service: BuyOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyOfferService],
    }).compile();

    service = module.get<BuyOfferService>(BuyOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

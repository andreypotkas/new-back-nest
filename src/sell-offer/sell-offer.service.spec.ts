import { Test, TestingModule } from '@nestjs/testing';
import { SellOfferService } from './sell-offer.service';

describe('SellOfferService', () => {
  let service: SellOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellOfferService],
    }).compile();

    service = module.get<SellOfferService>(SellOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

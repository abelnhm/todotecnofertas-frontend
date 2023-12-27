import { Offer } from '../model/offer';
import { OffersRepo } from './api.repo.offers';

describe('Given OffersRepo class', () => {
  const mockToken = 'mockToken';
  const repo = new OffersRepo(mockToken);
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({});
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getOfferById should be used', async () => {
      const mockId = '1';
      const expected = {};
      const result = await repo.getOfferById(mockId);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method getOffers should be used', async () => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
      const expected = [] as Offer[];
      const result = await repo.getOffers();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method filterOffersByCategory should be used', async () => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
      const mockCategory = 'mobiles';
      const expected = [] as Offer[];
      const result = await repo.filterOffersByCategory(mockCategory);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method createOffer should be used', async () => {
      const newOffer = new FormData();
      const expected = {} as Offer;
      const result = await repo.createOffer(newOffer);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method updateOffer should be used', async () => {
      const mockOfferId = '1';
      const mockForm = new FormData();
      const expected = {} as Offer;
      const result = await repo.updateOffer(mockOfferId, mockForm);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is fail', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });

    test('Then method getOfferById should be used and response error', async () => {
      await expect(repo.getOfferById('')).rejects.toThrow();
    });

    test('Then method getOffers should be used and response error', async () => {
      await expect(repo.getOffers()).rejects.toThrow();
    });

    test('Then method filterOffersByCategory should be used and response error', async () => {
      await expect(repo.filterOffersByCategory('')).rejects.toThrow();
    });

    test('Then method createOffer should be used and response error', async () => {
      const newOffer = new FormData();
      await expect(repo.createOffer(newOffer)).rejects.toThrow();
    });

    test('Then method deleteOffer should be used and response error', async () => {
      const mockIdOffer = '1' as Offer['id'];
      await expect(repo.deleteOffer(mockIdOffer)).rejects.toThrow();
    });

    test('Then method updateOffer should be used and response error', async () => {
      const mockIdOffer = '1';
      const mockOffer = new FormData();
      await expect(repo.updateOffer(mockIdOffer, mockOffer)).rejects.toThrow();
    });
  });
});

import {
  loadOffersThunk,
  loadOfferByIdThunk,
  filterOffersByCategoryThunk,
  createOfferThunk,
  deleteOfferThunk,
  updateOfferThunk,
} from './offers.thunk';
import { OffersRepo } from '../../services/api.repo.offers.ts';
import { appStore } from '../../store/store.ts';
import { Offer } from '../../model/offer.ts';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockOffersRepo = {
      repo: {
        getOffers: jest.fn().mockReturnValue([]),
        getOfferById: jest.fn().mockReturnValue({}),
        filterOffersByCategory: jest.fn().mockReturnValue([]),
        createOffer: jest.fn().mockReturnValue({}),
        deleteOffer: jest.fn().mockResolvedValue('1'),
        updateOffer: jest.fn().mockResolvedValue({}),
      } as unknown as OffersRepo,
    };

    test('Then it should dispatch loadOffersThunk', async () => {
      const data = { ...mockOffersRepo } as { repo: OffersRepo };
      await appStore.dispatch(loadOffersThunk(data.repo));
      expect(data.repo.getOffers).toHaveBeenCalled();
    });

    test('Then it should dispatch loadOfferByIdThunk', async () => {
      const mockId = '1';
      const data = { ...mockOffersRepo } as {
        repo: OffersRepo;
        id: Offer['id'];
      };
      await appStore.dispatch(
        loadOfferByIdThunk({ repo: data.repo, id: mockId })
      );
      expect(data.repo.getOfferById).toHaveBeenCalled();
    });

    test('Then it should dispatch filterOffersByCategoryThunk', async () => {
      const mockCategory = 'mobiles';
      const data = { ...mockOffersRepo } as {
        repo: OffersRepo;
        category: string;
      };
      await appStore.dispatch(
        filterOffersByCategoryThunk({ repo: data.repo, category: mockCategory })
      );
      expect(data.repo.filterOffersByCategory).toHaveBeenCalled();
    });

    test('Then it should dispatch createOfferThunk', async () => {
      const data = { ...mockOffersRepo } as { repo: OffersRepo };
      const newOffer = {} as FormData;

      await appStore.dispatch(createOfferThunk({ repo: data.repo, newOffer }));
      expect(data.repo.createOffer).toHaveBeenCalledWith(newOffer);
    });

    test('Then it should dispatch deleteOfferThunk', async () => {
      const data = { ...mockOffersRepo } as { repo: OffersRepo };
      const idOfferToDelete = '1';

      await appStore.dispatch(
        deleteOfferThunk({ repo: data.repo, id: idOfferToDelete })
      );
      expect(data.repo.deleteOffer).toHaveBeenCalledWith(idOfferToDelete);
    });

    test('Then it should dispatch updateOfferThunk', async () => {
      const data = { ...mockOffersRepo } as { repo: OffersRepo };
      const idOfferToUpdate = '1' as Offer['id'];
      const offerToUpdate = {} as FormData;

      await appStore.dispatch(
        updateOfferThunk({
          repo: data.repo,
          id: idOfferToUpdate,
          updateOffer: offerToUpdate,
        })
      );
      expect(data.repo.updateOffer).toHaveBeenCalledWith(
        idOfferToUpdate,
        offerToUpdate
      );
    });
  });
});

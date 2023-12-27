import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersRepo } from '../../services/api.repo.offers.ts';
import { Offer } from '../../model/offer.ts';

export type Params = {
  repo: OffersRepo;
  newOffer: FormData;
};

export const loadOffersThunk = createAsyncThunk<Offer[], OffersRepo>(
  'load',
  async (repo) => {
    const offers = await repo.getOffers();
    return offers;
  }
);

export const loadOfferByIdThunk = createAsyncThunk<
  Offer,
  { repo: OffersRepo; id: Offer['id'] }
>('loadItem', async ({ id, repo }) => {
  const offer = await repo.getOfferById(id);
  return offer;
});

export const filterOffersByCategoryThunk = createAsyncThunk(
  'filter',
  async ({ repo, category }: { repo: OffersRepo; category: string }) => {
    const offers = await repo.filterOffersByCategory(category);
    if (!category) {
      return offers;
    } else {
      return offers.filter((offer) => offer.category === category);
    }
  }
);

export const createOfferThunk = createAsyncThunk<Offer, Params>(
  'create',
  async ({ repo, newOffer }) => {
    const finalClothingItem = await repo.createOffer(newOffer);
    return finalClothingItem;
  }
);

export const deleteOfferThunk = createAsyncThunk<
  Offer['id'],
  {
    repo: OffersRepo;
    id: Offer['id'];
  }
>('delete', async ({ repo, id }) => {
  await repo.deleteOffer(id);
  return id;
});

export const updateOfferThunk = createAsyncThunk<
  Offer,
  {
    repo: OffersRepo;
    id: Offer['id'];
    updateOffer: FormData;
  }
>('update', async ({ repo, id, updateOffer }) => {
  const finalClothingItem = await repo.updateOffer(id, updateOffer);
  return finalClothingItem;
});

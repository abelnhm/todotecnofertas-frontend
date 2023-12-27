import { useCallback, useMemo } from 'react';
import { OffersRepo } from '../services/api.repo.offers.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import {
  loadOffersThunk,
  loadOfferByIdThunk,
  createOfferThunk,
  deleteOfferThunk,
  updateOfferThunk,
  filterOffersByCategoryThunk,
} from '../slices/offers/offers.thunk.ts';
import { Offer } from '../model/offer.ts';

export function useOffers() {
  const { currentOfferItem, offers, filteredOffersByCategory } = useSelector(
    (state: RootState) => state.offersState
  );
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new OffersRepo(token!), [token]);

  const loadOffers = useCallback(async () => {
    dispatch(loadOffersThunk(repo));
  }, [repo, dispatch]);

  const loadOffer = useCallback(async () => {
    dispatch(loadOfferByIdThunk({ repo, id: currentOfferItem?.id as string }));
  }, [repo, currentOfferItem?.id, dispatch]);

  const deleteOffer = async (id: Offer['id']) => {
    dispatch(
      deleteOfferThunk({
        id,
        repo,
      })
    );
  };

  const createOffer = async (newOffer: FormData) => {
    dispatch(
      createOfferThunk({
        repo,
        newOffer,
      })
    );
  };

  const updateOffer = async (id: Offer['id'], updateOffer: FormData) => {
    dispatch(updateOfferThunk({ id, repo, updateOffer }));
  };

  const loadByCategory = async (category: string) => {
    if (category !== 'all') {
      dispatch(filterOffersByCategoryThunk({ category, repo }));
    } else {
      dispatch(loadOffersThunk(repo));
    }
  };

  return {
    loadOffers,
    loadOffer,
    offers,
    currentOfferItem,
    createOffer,
    deleteOffer,
    updateOffer,
    filteredOffersByCategory,
    loadByCategory,
  };
}

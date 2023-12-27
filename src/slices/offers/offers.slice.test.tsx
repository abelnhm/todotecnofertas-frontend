import { Offer } from '../../model/offer';
import offersReducer, { OffersState } from './offers.slice';

describe('Given offersReducer', () => {
  describe('When offers/setCurrentOffers action is dispacth', () => {
    test('Then the new state will be returned with the currentOfferItem set', () => {
      const mockOfferItem = {} as unknown as Offer;
      const action = {
        type: 'offers/setCurrentOffers',
        payload: mockOfferItem,
      };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.currentOfferItem).toBe(mockOfferItem);
    });
  });

  describe('When offers/setFilteredByCategory action is dispacth', () => {
    test('Then the new state will be returned with filteredOffersByCategory set', () => {
      const mockOfferItem = [] as unknown as Offer[];
      const action = {
        type: 'offers/setFilteredByCategory',
        payload: mockOfferItem,
      };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.filteredOffersByCategory).toBe(mockOfferItem);
    });
  });

  describe('When offers/load/pending action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "loading"', () => {
      const action = { type: 'load/pending' };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.stateOption).toBe('loading');
    });
  });

  describe('When offers/load/rejected action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "error"', () => {
      const action = { type: 'load/rejected' };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.stateOption).toBe('error');
    });
  });

  describe('When offers/load/fulfilled action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "idle"', () => {
      const action = {
        type: 'load/fulfilled',
        payload: [{}] as unknown as Offer,
      };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.stateOption).toBe('idle');
    });
  });

  describe('When offers/load/rejected action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "error"', () => {
      const action = { type: 'loadItem/rejected' };
      const state: OffersState = {} as OffersState;
      const result = offersReducer(state, action);
      expect(result.stateOption).toBe('error');
    });
  });
});

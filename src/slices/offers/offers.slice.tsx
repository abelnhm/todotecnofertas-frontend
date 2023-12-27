import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../model/offer';
import {
  loadOffersThunk,
  loadOfferByIdThunk,
  createOfferThunk,
  deleteOfferThunk,
  updateOfferThunk,
  filterOffersByCategoryThunk,
} from './offers.thunk';

export type OffersState = {
  offers: Offer[];
  stateOption: 'idle' | 'loading' | 'error';
  currentOfferItem: Offer | null;
  filteredOffersByCategory: Offer[];
};

const initialState: OffersState = {
  offers: [],
  stateOption: 'idle',
  currentOfferItem: null,
  filteredOffersByCategory: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCurrentOffers: (
      state: OffersState,
      { payload }: PayloadAction<Offer | null>
    ) => {
      state.currentOfferItem = payload;
      return state;
    },
    setFilteredByCategory: (
      state: OffersState,
      { payload }: PayloadAction<Offer[]>
    ) => {
      state.filteredOffersByCategory = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadOffersThunk.pending, (state: OffersState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadOffersThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer[]>) => {
        state.offers = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadOffersThunk.rejected, (state: OffersState) => {
      state.stateOption = 'error';
      return state;
    });

    builder.addCase(loadOfferByIdThunk.pending, (state: OffersState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadOfferByIdThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer>) => {
        state.currentOfferItem = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadOfferByIdThunk.rejected, (state: OffersState) => {
      state.stateOption = 'error';
      return state;
    });
    builder.addCase(
      createOfferThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer>) => {
        state.offers.push(payload);
        return state;
      }
    );
    builder.addCase(
      deleteOfferThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer['id']>) => {
        state.offers.splice(
          state.offers.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
    builder.addCase(
      updateOfferThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer>) => {
        state.offers[state.offers.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      }
    );
    builder.addCase(
      filterOffersByCategoryThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer[]>) => {
        state.offers = payload;
        return state;
      }
    );
  },
});

export default offersSlice.reducer;
export const { setCurrentOffers, setFilteredByCategory } = offersSlice.actions;

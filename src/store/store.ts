import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../slices/users/users.slice';
import offersReducer from '../slices/offers/offers.slice';

export const appStore = configureStore({
  reducer: {
    usersState: usersReducer,
    offersState: offersReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

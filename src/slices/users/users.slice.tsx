import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../model/user';
import { LoginResponse } from '../../types/login.response';
import { loginThunk, loginTokenThunk } from './users.thunk';

type LoginState = 'idle' | 'logging' | 'error';

export type UsersState = {
  loggedUser: User | null;
  loginLoadState: LoginState;
  token: string;
};

const initialState: UsersState = {
  loggedUser: null,
  loginLoadState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token = '';
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.loginLoadState = 'logging';
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );
    builder.addCase(loginThunk.rejected, (state: UsersState) => {
      state.loginLoadState = 'error';
    });
    builder.addCase(
      loginTokenThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export default usersSlice.reducer;
export const ac = usersSlice.actions;

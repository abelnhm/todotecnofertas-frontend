import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/login.response';
import { LoginUser } from '../../model/user';
import { UsersRepo } from '../../services/api.repo.users';
import { LocalStorage } from '../../services/local.storage';

export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: UsersRepo;
    userStore: LocalStorage<{ token: string }>;
  }
>('login', async ({ loginUser, repo, userStore }) => {
  const loginResponse = await repo.login(loginUser);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});

export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: UsersRepo;
    userStore: LocalStorage<{ token: string }>;
  }
>('loginWithToken', async ({ token, repo, userStore }) => {
  const loginResponse = await repo.loginWithToken(token);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});

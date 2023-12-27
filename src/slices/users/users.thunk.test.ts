import { LoginUser } from '../../model/user';
import { UsersRepo } from '../../services/api.repo.users';
import { LocalStorage } from '../../services/local.storage';
import { appStore } from '../../store/store';
import { loginThunk, loginTokenThunk } from './users.thunk';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const sharedData = {
      repo: {
        login: jest.fn().mockReturnValue({
          token: '',
        }),
        loginWithToken: jest.fn().mockReturnValue({
          token: '',
        }),
      } as unknown as UsersRepo,
      userStore: {
        set: jest.fn(),
      } as unknown as LocalStorage<{
        token: string;
      }>,
    };

    test('Then it should dispatch loginThunk and update user store', async () => {
      const data = { ...sharedData, loginUser: {} as LoginUser };
      await appStore.dispatch(loginThunk(data));
      expect(data.repo.login).toHaveBeenCalled();
      expect(data.userStore.set).toHaveBeenCalled();
    });
    test('Then it should dispatch loginTokenThunk and update user store', async () => {
      const data = { ...sharedData, token: '' };
      await appStore.dispatch(loginTokenThunk(data));
      expect(data.repo.login).toHaveBeenCalled();
      expect(data.userStore.set).toHaveBeenCalled();
    });
  });
});

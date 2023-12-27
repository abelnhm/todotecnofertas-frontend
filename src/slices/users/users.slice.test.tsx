import usersReducer, { UsersState } from './users.slice';

describe('Given usersReducer', () => {
  describe(' When users/logout action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'users/logout' };
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe('');
    });
  });

  describe(' When users/login/pending action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'login/pending' };
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loginLoadState).toBe('logging');
    });
  });

  test('Then the new state will be returned ', () => {
    const action = { type: 'login/rejected' };
    const state: UsersState = {} as UsersState;
    const result = usersReducer(state, action);
    expect(result.loginLoadState).toBe('error');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'login/fulfilled',
      payload: { user: 'test user', token: 'token' },
    };
    const state: UsersState = {} as UsersState;
    const result = usersReducer(state, action);
    expect(result.loggedUser).toBe('test user');
    expect(result.token).toBe('token');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'loginWithToken/fulfilled',
      payload: { user: 'test user', token: 'token' },
    };
    const state: UsersState = {} as UsersState;
    const result = usersReducer(state, action);
    expect(result.loggedUser).toBe('test user');
    expect(result.token).toBe('token');
  });
});

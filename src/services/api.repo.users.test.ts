import { UsersRepo } from './api.repo.users';
import { LoginUser, User } from '../model/user';

describe('Given UsersRepo class', () => {
  const repo = new UsersRepo();
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({});
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method login should be used', async () => {
      const mockLogin = {
        email: 'test@example.com',
        password: 'password123',
      };
      const expected = {} as User;
      const result = await repo.login(mockLogin);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('then method registerUser should be used', async () => {
      const mockRegister = {} as Partial<User>;
      const result = await repo.createUser(mockRegister);
      expect(result).toEqual({});
    });

    test('Then method loginWithToken should...', async () => {
      const mockToken = 'mockToken';
      const loginUser = {} as LoginUser;
      const response = await repo.loginWithToken(mockToken);
      expect(response).toEqual(loginUser);
    });
  });

  describe('When we instantiate it and response is fail', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });

    test('Then method login should be used and response error', async () => {
      const loginUser = {
        email: 'test@test.com',
      } as LoginUser;
      expect(repo.login(loginUser)).rejects.toThrow();
    });

    test('Then method createUser should be used and response error', async () => {
      const mockNewUser = {} as Partial<User>;
      expect(repo.createUser(mockNewUser)).rejects.toThrow();
    });

    test('Then method loginWithToken should be used and response error', async () => {
      const token: string = 'mockedToken';
      expect(repo.loginWithToken(token)).rejects.toThrow();
    });
  });
});

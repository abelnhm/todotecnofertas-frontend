import { useUsers } from './use.users';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { UsersRepo } from '../services/api.repo.users';
import { LoginUser, User } from '../model/user';
import { LocalStorage } from '../services/local.storage';
import { appStore } from '../store/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as Partial<User>;
describe('Given useUsers Hook', () => {
  const TestComponent = () => {
    const { logout, login, loginWithToken, register } = useUsers();

    return (
      <>
        <button onClick={() => logout()}></button>
        <button onClick={() => login(mockLoginUser)}></button>
        <button onClick={() => loginWithToken()}></button>
        <button onClick={() => register(mockNewUser)}></button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <Provider store={appStore}>
        <TestComponent></TestComponent>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });

  describe('When we click button makeLogOut', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button login', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button loginWithToken', () => {
    test('Then the dispacht should have been called', async () => {
      LocalStorage.prototype.get = jest.fn().mockReturnValue('test');
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button register ', () => {
    test('Then the dispacht should have been called', async () => {
      UsersRepo.prototype.createUser = jest.fn();
      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});

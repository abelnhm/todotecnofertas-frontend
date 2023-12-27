import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import '@testing-library/jest-dom';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: {
      name: 'Test',
    },
  }),
}));

describe('Given AppRoutes component', () => {
  describe('When we navigate to home page', () => {
    const MockedHomeComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock('../pages/home/home', () => MockedHomeComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('Home');
    });
    test('Then the Home (List) component should been called', () => {
      expect(MockedHomeComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to login page', () => {
    const MockedLoginComponent = jest.fn().mockReturnValue(<h1>Welcome</h1>);
    jest.mock('../pages/login/login', () => MockedLoginComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/sign-in']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('Welcome');
    });
    test('Then the login (FormLogin) component should been called', () => {
      expect(MockedLoginComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to register page', () => {
    const MockedRegisterComponent = jest.fn().mockReturnValue(<h1>Welcome</h1>);
    jest.mock('../pages/register/register', () => MockedRegisterComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/sign-up']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('Welcome');
    });
    test('Then the register (FormRegister) component should been called', () => {
      expect(MockedRegisterComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to offer details page', () => {
    const MockedOfferDetailsComponent = jest
      .fn()
      .mockReturnValue(<h1>offer</h1>);
    jest.mock('../pages/details/details', () => MockedOfferDetailsComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/offer/:id']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('offer');
    });
    test('Then the offer (OfferDetails) component should been called', () => {
      expect(MockedOfferDetailsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to error page', () => {
    const MockedErrorComponent = jest.fn().mockReturnValue(<h1>error</h1>);
    jest.mock('../pages/error/error', () => MockedErrorComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/*']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('error');
    });
    test('Then the error (Error) component should been called', () => {
      expect(MockedErrorComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to share offer page', () => {
    const MockedOfferShareComponent = jest.fn().mockReturnValue(<h1>share</h1>);
    jest.mock('../pages/create/create', () => MockedOfferShareComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/offer/share']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('share');
    });
    test('Then the offer share (FormCreate) component should been called', () => {
      expect(MockedOfferShareComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to edit offer page', () => {
    const MockedOfferEditComponent = jest.fn().mockReturnValue(<h1>edit</h1>);
    jest.mock('../pages/edit/edit', () => MockedOfferEditComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/offer/edit/:id']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('edit');
    });
    test('Then the offer edit (FormEdit) component should been called', () => {
      expect(MockedOfferEditComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to delete offer page', () => {
    const MockedOfferDeleteComponent = jest
      .fn()
      .mockReturnValue(<h1>delete</h1>);
    jest.mock('../pages/delete/delete', () => MockedOfferDeleteComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter
              initialEntries={['/offer/delete/:id']}
              initialIndex={0}
            >
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('delete');
    });
    test('Then the offer delete (FormEdit) component should been called', () => {
      expect(MockedOfferDeleteComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to user profile page', () => {
    const MockedUserProfileComponent = jest
      .fn()
      .mockReturnValue(<h1>profile</h1>);
    jest.mock('../pages/profile/profile', () => MockedUserProfileComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <MemoryRouter initialEntries={['/my-profile']} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </MemoryRouter>
          </Provider>
        );
      });
      element = screen.getByText('profile');
    });
    test('Then the user profile (UserProfile) component should been called', () => {
      expect(MockedUserProfileComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});

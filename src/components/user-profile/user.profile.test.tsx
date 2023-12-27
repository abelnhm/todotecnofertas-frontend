import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { UserProfile } from './user.profile';

describe('Given UserProfile component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <UserProfile></UserProfile>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });

    test('Then it should display user data', () => {
      const nameElement = screen.getByText(/Name:/i);
      const emailElement = screen.getByText(/Email:/i);

      expect(nameElement).toBeInTheDocument();
      expect(emailElement).toBeInTheDocument();
    });

    test('Then it should display user offers', () => {
      const offersHeaderElement = screen.getByText(/My offers/i);
      expect(offersHeaderElement).toBeInTheDocument();

      const offersListElement = screen.getByRole('list');
      expect(offersListElement).toBeInTheDocument();
    });

    test('Then it should display logout button', () => {
      const logoutButtonElement = screen.getByRole('button', {
        name: /Log Out/i,
      });
      expect(logoutButtonElement).toBeInTheDocument();
    });
  });
});

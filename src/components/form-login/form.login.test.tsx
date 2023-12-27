import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { FormLogin } from './form.login';

describe('Given FormLogin component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FormLogin></FormLogin>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });
  });
});

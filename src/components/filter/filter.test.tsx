import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from './filter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given Filter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('search');
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the "Filter" heading', () => {
      const heading = screen.getByRole('heading', { name: /filter/i });
      expect(heading).toBeInTheDocument();
    });

    test('Then it should render the "All Latest Offers" link', () => {
      const link = screen.getByRole('link', { name: /all latest offers/i });
      expect(link).toBeInTheDocument();
    });

    test('Then it should call loadByCategory when the "All Latest Offers" link is clicked', () => {
      const link = screen.getByRole('link', { name: /all latest offers/i });
      fireEvent.click(link);
    });
  });
});

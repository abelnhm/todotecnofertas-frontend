import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store.ts';
import { CategoryHeader } from './category.header';

jest.mock('../loading/loading');

describe('Given CategoryHeader component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <CategoryHeader />
          </Router>
        </Provider>
      );
    });

    test('Then it should render the category list', () => {
      const categoryList = screen.getByRole('tabpanel');
      expect(categoryList).toBeInTheDocument();
    });

    test('Then it should render the left scroll button and scroll left when left scroll button is clicked', () => {
      const scrollLeftButton = screen.getByTestId('scroll-left');
      expect(scrollLeftButton).toBeInTheDocument();
      userEvent.click(scrollLeftButton);
    });

    test('Then it should render the right scroll button and scroll right when right scroll button is clicked', () => {
      const scrollRightButton = screen.getByTestId('scroll-right');
      expect(scrollRightButton).toBeInTheDocument();
      userEvent.click(scrollRightButton);
    });

    test('Then it should load offers when a category is clicked', () => {
      const categoryButton = screen.getByText('Mobile');
      userEvent.click(categoryButton);
    });
  });
});

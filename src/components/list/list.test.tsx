import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list';
import { appStore } from '../../store/store.ts';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Offer } from '../../model/offer.ts';

jest.mock('../offer/offer');

jest.mock('../../hooks/use.offers', () => ({
  useOffers: jest.fn().mockReturnValue({
    offers: [
      { id: 1, title: 'mockTitle1' },
      { id: 2, title: 'mockTitle2' },
    ] as unknown as Offer[],
    loadOffers: jest.fn(),
  }),
}));
describe('Given List component', () => {
  beforeEach(() => {
    render(
      <Provider store={appStore}>
        <Router>
          <List></List>
        </Router>
      </Provider>
    );
  });
  describe('When we instantiate', () => {
    test('Then it should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});

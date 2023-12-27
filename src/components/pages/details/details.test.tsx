import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsPage from './details';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { OfferDetails } from '../../offer-details/offer.details';

jest.mock('../../button-back/button.back');
jest.mock('../../offer-details/offer.details');

describe('Given DetailsPage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <DetailsPage></DetailsPage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders OfferDetails with Detail component', () => {
      expect(OfferDetails).toHaveBeenCalled();
    });
  });
});

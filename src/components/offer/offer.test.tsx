import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OfferCard } from './offer';
import { Offer } from '../../model/offer';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Offer component', () => {
  const url = new URL('https://www.test.com');
  const mockOffer = {
    offerURL: url,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    author: {
      userName: 'Abel',
    },
    image: {
      cloudinaryURL: 'test',
    },
  } as unknown as Offer;
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <OfferCard offerItem={mockOffer}></OfferCard>
          </Provider>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});

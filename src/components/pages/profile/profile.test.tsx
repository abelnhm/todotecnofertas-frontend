import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilePage from './profile';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { UserProfile } from '../../user-profile/user.profile';

jest.mock('../../button-back/button.back');
jest.mock('../../user-profile/user.profile');

describe('Given ProfilePage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <ProfilePage></ProfilePage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders UserProfile with Detail component', () => {
      expect(UserProfile).toHaveBeenCalled();
    });
  });
});

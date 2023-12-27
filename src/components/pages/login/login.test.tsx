import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './login';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { FormLogin } from '../../form-login/form.login';

jest.mock('../../button-back/button.back');
jest.mock('../../form-login/form.login');

describe('Given LoginPage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <LoginPage></LoginPage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders FormLogin with Detail component', () => {
      expect(FormLogin).toHaveBeenCalled();
    });
  });
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterPage from './register';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { FormRegister } from '../../form-register/form.register';

jest.mock('../../button-back/button.back');
jest.mock('../../form-register/form.register');

describe('Given RegisterPage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <RegisterPage></RegisterPage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders FormRegister with Detail component', () => {
      expect(FormRegister).toHaveBeenCalled();
    });
  });
});

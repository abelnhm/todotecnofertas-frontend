import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatePage from './create';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { FormCreate } from '../../form-create/form.create';

jest.mock('../../button-back/button.back');
jest.mock('../../form-create/form.create');

describe('Given CreatePage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <CreatePage></CreatePage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders FormCreate with Detail component', () => {
      expect(FormCreate).toHaveBeenCalled();
    });
  });
});

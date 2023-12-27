import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditPage from './edit';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { FormEdit } from '../../form-edit/form.edit';

jest.mock('../../button-back/button.back');
jest.mock('../../form-edit/form.edit');

describe('Given EditPage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <EditPage></EditPage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders FormEdit with Detail component', () => {
      expect(FormEdit).toHaveBeenCalled();
    });
  });
});

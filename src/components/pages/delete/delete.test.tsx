import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeletePage from './delete';
import { MemoryRouter as Router } from 'react-router-dom';

import { BackToHome } from '../../button-back/button.back';
import { ConfirmDelete } from '../../confirm-delete/confirm.delete';

jest.mock('../../button-back/button.back');
jest.mock('../../confirm-delete/confirm.delete');

describe('Given DeletePage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <DeletePage></DeletePage>
      </Router>
    );
    test('renders BackToHome with Detail component', () => {
      expect(BackToHome).toHaveBeenCalled();
    });
    test('renders ConfirmDelete with Detail component', () => {
      expect(ConfirmDelete).toHaveBeenCalled();
    });
  });
});

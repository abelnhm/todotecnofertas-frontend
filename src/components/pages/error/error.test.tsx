import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './error';
import { Error } from '../../error/error';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../error/error');
describe('Given ErrorPage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <ErrorPage></ErrorPage>
      </Router>
    );
    test('renders Detail-page with Detail component', () => {
      expect(Error).toHaveBeenCalled();
    });
  });
});

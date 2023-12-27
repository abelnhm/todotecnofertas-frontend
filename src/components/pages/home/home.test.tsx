import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home';
import { MemoryRouter as Router } from 'react-router-dom';

import { CategoryHeader } from '../../category-header/category.header';
import { Filter } from '../../filter/filter';
import { List } from '../../list/list';

jest.mock('../../category-header/category.header');
jest.mock('../../filter/filter');
jest.mock('../../list/list');

describe('Given HomePage element', () => {
  describe('when we initiate', () => {
    render(
      <Router>
        <HomePage></HomePage>
      </Router>
    );
    test('renders CategoryHeader with Detail component', () => {
      expect(CategoryHeader).toHaveBeenCalled();
    });
    test('renders Filter with Detail component', () => {
      expect(Filter).toHaveBeenCalled();
    });
    test('renders List with Detail component', () => {
      expect(List).toHaveBeenCalled();
    });
  });
});

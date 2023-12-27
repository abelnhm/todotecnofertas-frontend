import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { appStore } from '../../store/store.ts';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <Header></Header>
          </Router>
        </Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});

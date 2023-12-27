import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { appStore } from '../../store/store.ts';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BackToHome } from './button.back.tsx';

describe('Given BackToHome component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <BackToHome></BackToHome>
          </Router>
        </Provider>
      );
    });

    test('renders BackToHome with link', () => {
      const element = screen.getByRole('link');
      expect(element).toBeInTheDocument();
    });

    test('renders BackToHome with correct text', () => {
      const element = screen.getByText('Back to home');
      expect(element).toBeInTheDocument();
    });

    test('renders BackToHome with correct route', () => {
      const element = screen.getByRole('link');
      expect(element).toHaveAttribute('href', '/');
    });
  });
});

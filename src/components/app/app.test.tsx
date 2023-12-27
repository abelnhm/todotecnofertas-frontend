import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.tsx';
import { Footer } from '../footer/footer.tsx';
import { appStore } from '../../store/store.ts';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

jest.mock('../footer/footer');
describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <App></App>
          </Router>
        </Provider>
      );
    });
    test('renders App with Footer', () => {
      expect(Footer).toHaveBeenCalled();
    });
  });
});

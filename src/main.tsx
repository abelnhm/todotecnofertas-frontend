import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import { appStore } from './store/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

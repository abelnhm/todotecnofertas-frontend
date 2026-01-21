import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import './app.scss';
import { AppRoutes } from '../router/app.routes.tsx';

import { useEffect } from 'react';
import { useOffers } from '../../hooks/use.offers.tsx';
import { useUsers } from '../../hooks/use.users.tsx';

function App() {
  const { loginWithToken } = useUsers();
  const { loadOffers } = useOffers();

  useEffect(() => {
    loginWithToken();
  }, []);

  useEffect(() => {
    loadOffers();
  }, [loadOffers]);

  return (
    <>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;

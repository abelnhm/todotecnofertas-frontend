import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUsers } from '../../hooks/use.users';

const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login/login'));
const RegisterPage = lazy(() => import('../pages/register/register'));
const CreateOfferPage = lazy(() => import('../pages/create/create'));
const OfferPage = lazy(() => import('../pages/details/details'));
const ErrorPage = lazy(() => import('../pages/error/error'));
const EditOfferPage = lazy(() => import('../pages/edit/edit'));
const UserProfile = lazy(() => import('../pages/profile/profile'));
const ConfirmDelete = lazy(() => import('../pages/delete/delete'));

export function AppRoutes() {
  const { loggedUser } = useUsers();

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
        <Route path="/sign-up" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/offer/:id" element={<OfferPage></OfferPage>}></Route>
        {loggedUser && (
          <>
            <Route
              path="/offer/share"
              element={<CreateOfferPage></CreateOfferPage>}
            ></Route>
            <Route
              path="/offer/edit/:id"
              element={<EditOfferPage></EditOfferPage>}
            ></Route>
            <Route
              path="/offer/delete/:id"
              element={<ConfirmDelete></ConfirmDelete>}
            ></Route>
            <Route
              path="/my-profile"
              element={<UserProfile></UserProfile>}
            ></Route>
          </>
        )}
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}

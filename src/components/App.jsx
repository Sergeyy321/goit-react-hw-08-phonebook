// import { Filter } from 'components/Filter/Filter';
// import { Contacts } from 'components/Contacts/Contacts';
// import { Phonebook } from 'components/Phonebook/Phonebook';
// import { ContactStyled } from './App/App.styled';
// import { useSelector } from 'react-redux';

// import { selectIsLoading, selectError, selectContacts } from 'redux/selector';
// import { Loader } from './Loader/loader';

// export const App = () => {
//   const contacts = useSelector(selectContacts);

//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   return (
 
//   );
// };

import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/loader';
import { useDispatch } from 'react-redux';
import {selectIsRefreshing} from 'redux/auth/selectors'
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import { Footer } from './footer/footer';
import {useSelector} from'react-redux'
const Navigation = lazy(() => import('./Navigations/Navigations'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Login = lazy(() => import('pages/LoginForm/LoginForm'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebooks'));
const Register = lazy(() => import('pages/RegisterForm/RegisterForm'));

export const App = () => {
  const dispatch = useDispatch();
  const  isRefreshing  = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </Suspense>
  );
};

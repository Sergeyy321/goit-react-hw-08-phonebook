import { Loader } from 'components/Loader/loader';
import {useSelector} from 'react-redux'
import { lazy, Suspense } from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Phonebooks } from 'pages/Phonebook/Phonebooks';

const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    justify-content: space-around;
    color:white;
text-decoration:none;
    background-color: #657cfc;
    display: flex;
    &.active {
      color: #ff0000;
    }
  `;
  const  isLoggedIn  = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink to="/contacts" end>
                Contacts
              </StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink to="/register" end>
                Register
              </StyledLink>
              <StyledLink to="/login" end>
                Login
              </StyledLink>
            </>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}><Outlet/></Suspense>
    </>
  );
}

import { HomeStyled, ContactStyled } from 'pages/Home.styled';
import { useSelector }  from 'react-redux'

import {selectIsLoggedIn} from 'redux/auth/selectors'

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <ContactStyled>
        Welcome to the phonebook
        </ContactStyled>
      ) : (
        <HomeStyled>
          {' '}
          <h1>Welcome to the phonebook</h1>{' '}
        </HomeStyled>
      )}
    </div>
  );
}

import {HomeStyled} from 'pages/Home.styled'
import { useSelector }  from 'react-redux'
import { Link } from 'react-router-dom';
import {selectIsLoggedIn,selectUser} from 'redux/auth/selectors'

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
const user = useSelector(selectUser);
  return (
    <div>
      {isLoggedIn ? (
        <p>
          {user.name}, Welcome to the phonebook
          <Link to="/contacts">  Contacts</Link>
        </p>
      ) : (
        <HomeStyled>
          {' '}
          <h1>Welcome to the phonebook</h1>{' '}
        </HomeStyled>
      )}
    </div>
  );
}

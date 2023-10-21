
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import {
  selectUser,
} from 'redux/auth/selectors';
import { Button } from 'components/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <span>
      Welcome, {user.name}
      <Button  onClick={() => dispatch(logOut())}>
     
      </Button>
    </span>
  );
}

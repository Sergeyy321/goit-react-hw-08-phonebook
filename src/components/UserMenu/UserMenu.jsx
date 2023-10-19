
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import {
  selectUser,
} from 'redux/auth/selectors';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <span>
      Hi, {user.name}
      <button  onClick={() => dispatch(logOut())}>
     
      </button>
    </span>
  );
}

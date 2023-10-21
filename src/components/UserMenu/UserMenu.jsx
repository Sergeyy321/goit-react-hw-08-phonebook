
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import {
  selectUser,

} from 'redux/auth/selectors';
  import { styled } from 'styled-components';

import { Button } from 'components/Button';
export default function UserMenu() {
  const dispatch = useDispatch();
  const user  = useSelector(selectUser);
 


  const ButtonStyled = styled.span`
 flex-direction: row-reverse;
   border-color: #657cfc;
   color: white;
   text-decoration: none;
   padding-left: 20px;
   padding-right:20px;
   background-color: #657cfc;
   display: flex;
   &.hover {
     color: #2417df;
   }
 `;

  return (
    <ButtonStyled>
      Welcome, {user.name}{' '}
      <Button onClick={() => dispatch(logOut())}>{'>'}</Button>
    </ButtonStyled>
  );
}

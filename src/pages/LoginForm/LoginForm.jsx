import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button';


export default function Login() {
  const dispatch = useDispatch()
 
  const handleSubmit = el => {
    el.preventDefault();
    const form = el.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form  onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        
        type="email"
        name="email"
        required
      ></input>
      <label>Password</label>
      <input
        type="password"
        name="password"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <Button style={{ padding: '5px 10px' }} type="submit">
        Login
      </Button>
    </form>
  );
}

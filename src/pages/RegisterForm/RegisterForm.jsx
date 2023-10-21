import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button';



export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = el => {
    el.preventDefault();
    const form = el.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} >
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required 
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        required
      ></input>
      <label>Password</label>
      <input  type="password" name="password" required />
      <Button style={{ padding: '5px 10px' }} type="submit">
        
        Register
      </Button>
    </form>
  );
}

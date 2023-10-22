import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import {Btn,Input,PhonebookStyled} from 'components/Phonebook/Addcontact.styled'
export const Addcontact = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.text.value;
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (contactExists) {
      alert(`${inputValue} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: inputValue,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} >
      <PhonebookStyled>
       
        <Input
          placeholder='name'
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookStyled>
      <div >
     
        <Input
        placeholder='phone'
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Btn type="submit">Add contact</Btn>
    </form>
  );
};

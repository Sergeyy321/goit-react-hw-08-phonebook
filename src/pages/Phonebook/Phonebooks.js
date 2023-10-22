import { Addcontact } from 'components/Phonebook/Addcontact';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import {PhonebookStyled} from 'pages/Phonebook/Phonebook.styled.js'
export default function Phonebooks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookStyled>
      <h2>Phonebook</h2>
      <Addcontact />
      <h2>Contacts</h2>
      <Filter />
      <Contacts /> 
       {isLoading && !error && <Loader />}
    </PhonebookStyled>
  );
}

  //  <ContactStyled>
  //    <nav></nav>

  //    <Phonebook />
  //    <div>
  //      <h2>Contacts</h2>
  //      <Filter />
  //  
  //      <Contacts />
  //    </div>
  //  </ContactStyled>;
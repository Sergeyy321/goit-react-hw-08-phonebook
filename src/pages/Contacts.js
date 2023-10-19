import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';



export default function  Tasks () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length === 0 && 'No contacts found'}
      {isLoading === true && <Loader />}
      {error && <b>{error}</b>}
      <Contacts />
    </div>
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
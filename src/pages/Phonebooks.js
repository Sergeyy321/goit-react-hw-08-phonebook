import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function Phonebooks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {/* <Contacts /> */}
      {/* {isLoading && !error && <Loader />} */}
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
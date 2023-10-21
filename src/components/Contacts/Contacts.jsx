import React from 'react';
import { useEffect } from 'react';
import { ContactStyle } from './Contacts.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getContacts = () => {
    const normalizedValue = filter ? filter.toLowerCase().trim() : '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <ContactStyle>
      <ul>
        {getContacts().map(el => {
          return (
            <li key={el.id}>
              {el.name} {el.number}
              <button
                onClick={() => {
                  dispatch(deleteContact(el.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactStyle>
  );
};

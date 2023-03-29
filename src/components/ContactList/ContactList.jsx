import React from 'react';
import PropTypes from 'prop-types';
import { Contact, ContactInfo, DeleteButton } from './ContactList.styled';

const ContactList = ({ deleteContact, contacts }) => {
  // const filteredContacts = getFilteredContacts();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactInfo>
            {name}: {number}
          </ContactInfo>
          <DeleteButton
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;

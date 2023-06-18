import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';


const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <div className={css.contactList}>
      <ul className={css.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={css.contactItem}>
            {contact.name}: {contact.phone}
            <button
              type="button"
              className={css.deleteButton}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
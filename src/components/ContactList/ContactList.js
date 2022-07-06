import actions from 'components/redux/actions';
import { getFilteredContacts } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={id => dispatch(actions.contactDelete(id))}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;

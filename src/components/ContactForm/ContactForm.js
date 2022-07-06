import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'components/redux/actions';
import { getContacts } from 'components/redux/selectors';

import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Something went wrong in ContactForm`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      dispatch(
        actions.contactAdd({
          name,
          number,
        })
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={s.form} action="submit" onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Kuzya"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder="322-223-322"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

import actions from 'components/redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;

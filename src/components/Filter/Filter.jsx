import { Input } from './FIlter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { qwery } from 'redux/sliceFilters';
import { selectFilter } from 'redux/selector';
export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const id = nanoid();

  return (
    <div>
      <h2>Find contacts by name</h2>
      <Input
        id={id}
        type="text"
        value={filter}
        onChange={evt => dispatch(qwery(evt.currentTarget.value))}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onfilterChange: PropTypes.func.isRequired,
// };

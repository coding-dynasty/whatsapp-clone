import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import './styles/search.scss';

const Search = () => {
  return (
    <div className='Search'>
      <div className='Search__container'>
        <div className='Search__input_container'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search or start a new chat'
          />
        </div>
      </div>
      <FilterListIcon />
    </div>
  );
};
export default Search;

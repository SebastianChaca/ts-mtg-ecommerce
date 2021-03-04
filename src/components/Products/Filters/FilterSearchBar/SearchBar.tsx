import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAction } from '../../../../state/action-creators/prodcutsActions';
import { useTypedSelector } from '../../../../hooks/ReduxHooks/useTypedSelector';
import searchIcon from '../../../../assets/searchIcon3.png';
import { handleFilter } from '../../../../utils/filters';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { products } = useTypedSelector((state) => state.products);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const newSearchProd = handleFilter('searchBar', search);
    dispatch(filterAction(newSearchProd));
  }, [dispatch, search, products]);
  return (
    <>
      <div className='search-bar'>
        <form className='search-bar-form'>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder='search..'
            type='text'
            className='search-bar-input'
            value={search}
          />
          <button className='search-bar-btn'>
            <img src={searchIcon} alt='btn icon' className='search-bar-icon' />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;

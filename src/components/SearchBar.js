import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedCitiesAPI } from '../redux/city/citiesReducer';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value.trim());
    if (e.target.value.trim().length > 0) dispatch(getSearchedCitiesAPI(e.target.value.trim()));
  };

  return (
    
  );
};

export default SearchBar;

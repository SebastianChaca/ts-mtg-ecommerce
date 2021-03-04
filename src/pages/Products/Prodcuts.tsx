import Pagination from '../../components/Products/Pagination/Pagination';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { CircularProgress } from '@material-ui/core';
import SearchBar from '../../components/Products/Filters/FilterSearchBar/SearchBar';
import React from 'react';
import MenuGrow from '../../components/UI/MenuGrow';
import FilterCategoria from '../../components/Products/Filters/FIlterCategoria/FilterCategoria';

export default function Products() {
  const { loading } = useTypedSelector((state) => state.products);

  if (loading) {
    return (
      <section className='loading'>
        <CircularProgress />
      </section>
    );
  }
  return (
    <>
      <SearchBar />
      <FilterCategoria />
      <Pagination />
    </>
  );
}

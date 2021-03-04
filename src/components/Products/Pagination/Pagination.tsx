import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';
import PaginationArrowBtns from './PaginationArrowBtns';

export default function Pagination() {
  const { paginatedProd, loading } = useTypedSelector(
    (state) => state.products
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [paginatedProd]);

  return (
    <>
      <ProductList products={paginatedProd[page]} title={'Productos'} />
      {paginatedProd.length > 1 && (
        <article className='pagination-buttons'>
          <PaginationArrowBtns
            paginatedProd={paginatedProd}
            page={page}
            setPage={setPage}
          />
        </article>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/ReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { filterAction } from '../../../../state/action-creators/prodcutsActions';
import { handleFilter } from '../../../../utils/filters';
import FilterMap from '../FilterMap';

const FilterCategoria = () => {
  const { categorias, products } = useTypedSelector((state) => state.products);
  const [categoria, setCategoria] = useState<string>('Todas');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCategoria(e.target.value);
  };
  useEffect(() => {
    const newSearchProd = handleFilter('categorias', categoria);
    dispatch(filterAction(newSearchProd));
  }, [dispatch, categoria, products]);

  return (
    <div className='filter-categoria'>
      <h3>Filtrar por categorías: </h3>
      <FilterMap
        values={categorias}
        filters={categoria}
        handleChange={handleChange}
      />
    </div>
  );
};

export default FilterCategoria;

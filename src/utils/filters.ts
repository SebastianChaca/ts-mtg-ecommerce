import { Product } from '../state/interfaces/productInterface';
import { store } from '../state/store';
export const handleFilter = (filterType: string, filterValue: string) => {
  const state = store.getState();
  const products = state.products.products;
  switch (filterType) {
    case 'categorias':
      if (filterValue !== 'Todas') {
        const filterCategoria = products.filter((item: Product) => {
          return item.categoria === filterValue;
        });

        return filterCategoria;
      } else {
        const newFilterProd = products.filter((item) => {
          return item.categoria !== filterValue;
        });
        return newFilterProd;
      }
    case 'searchBar':
      const newSearchProd = products.filter((item: Product) => {
        let title = item.title.toLowerCase().trim();
        return title.includes(filterValue.toLowerCase().trim()) ? item : null;
      });
      return newSearchProd;

    default:
      return products;
  }
};

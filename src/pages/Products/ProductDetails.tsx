import React from 'react';
import ProductDetail from '../../components/Products/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { Product } from '../../state/interfaces/productInterface';
import { CircularProgress } from '@material-ui/core';

const ProductDetails = () => {
  let { idParam } = useParams<{ idParam: string }>();
  const { products } = useTypedSelector((state) => state.products);
  const product: Product[] = products.filter(
    (item: Product) => item.id === idParam
  );

  if (products.length === 0) {
    return (
      <section className='loading'>
        <CircularProgress />
      </section>
    );
  }

  return <ProductDetail product={product[0]} idParam={idParam} />;
};
export default ProductDetails;

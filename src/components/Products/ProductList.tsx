import Product from './Product';
interface Products {
  image: string[] | null;
  title: string;
  id: string;
  price: number;
}
interface ProductsList {
  title: string;
  products: Products[];
}

const ProductList: React.FC<ProductsList> = ({ title, products }) => {
  if (!products) {
    return <section className='loading'>No hay Productos disponibles</section>;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>{title}</h2>
      <div className='products-center'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default ProductList;

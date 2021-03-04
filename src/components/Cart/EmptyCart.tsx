import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className='empty-cart section'>
      <h2>No hay items en el carrito de compras</h2>
      <Link to='/products' className='btn btn-primary'>
        Agregar productos...{' '}
      </Link>
    </section>
  );
};

export default EmptyCart;

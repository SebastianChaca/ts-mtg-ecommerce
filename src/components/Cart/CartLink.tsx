import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { TiShoppingCart } from 'react-icons/ti';

const CartLink = () => {
  const { quantity } = useTypedSelector((state) => state.cart);
  return (
    <div>
      <div className='cart-link-container '>
        <Link to='/cart'>
          <TiShoppingCart className='cartIcon' />
        </Link>
        <span className='cart-link-total cart-responsive'>{quantity}</span>
      </div>
    </div>
  );
};

export default CartLink;

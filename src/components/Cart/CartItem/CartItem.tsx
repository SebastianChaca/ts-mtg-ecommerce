import Zoom from '@material-ui/core/Zoom';
import { Cart } from '../../../state/interfaces/cartInterfaces';
import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';

import { CartFaAngleBtn, RemoveBtn } from './CartBtns';
const CartItem: React.FC<Cart> = ({
  id,
  title,
  unit_price,
  image,
  quantity,
}) => {
  const { checkoutMode } = useTypedSelector((state) => state.cart);

  const subTotal = quantity * unit_price;
  return (
    <Zoom in={true} style={{ transitionDelay: '400ms' }}>
      <article className='cart-item'>
        <img src={image[0]} alt={title} />
        <div>
          <h4>{title}</h4>
          <h5>{unit_price.toFixed(2)}</h5>
          {!checkoutMode && <RemoveBtn id={id} />}
          {checkoutMode && <h6>Cantidad: {quantity}</h6>}
          {checkoutMode && <h6>Subtotal: {subTotal}</h6>}
        </div>
        {!checkoutMode && <CartFaAngleBtn id={id} quantity={quantity} />}
      </article>
    </Zoom>
  );
};
export default CartItem;

import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  cartTotal,
  checkoutModeOff,
} from '../../state/action-creators/cartActions';
import EmptyCart from '../../components/Cart/EmptyCart';
import CartComponent from '../../components/Cart/Cart/CartComponent';
import {
  clearMercadoPagoLink,
  redirectNull,
} from '../../state/action-creators/checkoutAction';
const Cart = () => {
  const { cart } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotal());
    dispatch(checkoutModeOff());
  }, [dispatch, cart]);
  useEffect(() => {
    dispatch(clearMercadoPagoLink());
    dispatch(redirectNull());
  }, [dispatch]);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return <CartComponent cart={cart} />;
};

export default Cart;

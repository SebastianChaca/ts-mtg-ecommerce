import React, { useEffect } from 'react';
import CartItem from '../../../components/Cart/CartItem/CartItem';
import { Cart } from '../../../state/interfaces/cartInterfaces';
import { useDispatch } from 'react-redux';
import { checkOutMode } from '../../../state/action-creators/checkoutAction';
interface checkMap {
  metodoPago: string | null;
  cart: Cart[];
  cartRecargo: Cart[];
}

const CheckOutMap: React.FC<checkMap> = ({ metodoPago, cart, cartRecargo }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkOutMode());
  }, [dispatch]);
  return (
    <div>
      {metodoPago === 'Efectivo'
        ? cart.map((item: Cart) => {
            return <CartItem key={item.id} {...item} />;
          })
        : cartRecargo.map((item: Cart) => {
            return <CartItem key={item.id} {...item} />;
          })}
    </div>
  );
};

export default CheckOutMap;

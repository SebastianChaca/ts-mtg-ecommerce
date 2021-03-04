import { Slide } from '@material-ui/core';
import React from 'react';
import CartItem from '../CartItem/CartItem';
import CartBtn from './CartBtn';
import CartTotal from './CartTotal';
import { Cart } from '../../../state/interfaces/cartInterfaces';
import Titulo from '../../UI/Titulo';
interface CartInterface {
  cart: Cart[];
}
const CartComponent: React.FC<CartInterface> = ({ cart }) => {
  return (
    <section className='cart-items section'>
      <Titulo title='Sus Productos' />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <CartTotal />
      <CartBtn />
    </section>
  );
};

export default CartComponent;

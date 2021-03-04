import { Zoom } from '@material-ui/core';
import React from 'react';
import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';
const CartTotal = () => {
  const { total } = useTypedSelector((state) => state.cart);
  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <h2>Total: {total}</h2>
      </Zoom>
    </div>
  );
};

export default CartTotal;

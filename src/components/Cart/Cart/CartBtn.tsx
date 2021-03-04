import { Zoom } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';

const CartBtn = () => {
  const { jwt } = useTypedSelector((state) => state.login);
  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        {jwt ? (
          <Link to='/metodopago' className='btn btn-primary btn-block'>
            Check Out
          </Link>
        ) : (
          <Link to='/login' className='btn btn-primary btn-block'>
            Login
          </Link>
        )}
      </Zoom>
    </div>
  );
};

export default CartBtn;

import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useActions } from '../../../hooks/ReduxHooks/useActions';
interface CartFaAngle {
  id: string;
  quantity: number;
}
interface RemoveBtnState {
  id: string;
}

export const CartFaAngleBtn: React.FC<CartFaAngle> = ({ id, quantity }) => {
  const { increase, decrease } = useActions();
  return (
    <div>
      <button
        type='button'
        className='cart-btn amount-btn'
        onClick={() => {
          increase(id);
        }}
      >
        <FaAngleUp style={{ height: 40, width: 15 }} />
      </button>

      <p className='item-amount'>{quantity}</p>

      <button
        type='button'
        className='cart-btn amount-btn'
        onClick={() => {
          decrease(id);
        }}
      >
        <FaAngleDown style={{ height: 45, width: 15 }} />
      </button>
    </div>
  );
};
export const RemoveBtn: React.FC<RemoveBtnState> = ({ id }) => {
  const { removeBtn } = useActions();
  return (
    <button
      type='button'
      className='cart-btn remove-btn'
      onClick={() => {
        removeBtn(id);
      }}
    >
      remove
    </button>
  );
};

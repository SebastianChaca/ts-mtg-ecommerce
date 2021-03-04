import { useState } from 'react';
import { useActions } from '../ReduxHooks/useActions';
interface selectState {
  name: string;
  value: string;
  link: string;
}
export const useClick = () => {
  const [selectValue, setselectValue] = useState<selectState>({
    name: '',
    value: '',
    link: '',
  });
  const { cartMercadoPago, cartTotalRecargo, clearCartRecargo } = useActions();
  const handleClick = (name: string, value: string, link: string) => {
    if (value === 'Mercado Pago') {
      cartMercadoPago();
      cartTotalRecargo();
    } else if (value === 'Efectivo') {
      clearCartRecargo();
    }
    setselectValue({
      name,
      value,
      link,
    });
  };
  return [selectValue, handleClick] as const;
};

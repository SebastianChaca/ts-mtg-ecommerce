import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  metodoPago,
  formaEnvio,
} from '../../state/action-creators/checkoutAction';
import { useActions } from '../ReduxHooks/useActions';

interface selectState {
  name: string;
  value: string;
  link: string;
}
export const useSelect = () => {
  const history = useHistory();
  const { metodoPago, formaEnvio } = useActions();
  const handleSelect = ({ name, value, link }: selectState) => {
    switch (name) {
      case 'metodoPago':
        metodoPago(value);
        history.push(link);
        break;
      case 'formaEnvio':
        formaEnvio(value);
        history.push(link);
        break;
      default:
        break;
    }
  };

  return handleSelect;
};

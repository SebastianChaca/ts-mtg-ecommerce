import React, { useEffect, useState } from 'react';
import { generarNumeroCompra } from '../../utils/randomNumber';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import ArrowLink from '../../components/Checkout/CheckoutComponents/ArrowLink';
import CheckOutTotal from '../../components/Checkout/CheckoutComponents/CheckOutTotal';
import Titulo from '../../components/UI/Titulo';
import CheckOutList from './CheckoutComponentsPage/CheckOutList';
import CheckOutMap from './CheckoutComponentsPage/CheckOutMap';
import FinalizarBtn from './CheckoutComponentsPage/FinalizarBtn';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const Checkout = () => {
  const history = useHistory();
  const [numeroCompra, setNumeroCompra] = useState<number>(0);
  const { cart, cartRecargo } = useTypedSelector((state) => state.cart);
  const {
    metodoPago,
    formaEnvio,
    loading,
    mercadoPagoLink,
    redirectTo,
  } = useTypedSelector((state) => state.checkout);
  useEffect(() => {
    setNumeroCompra(generarNumeroCompra());
  }, []);

  useEffect(() => {
    if (mercadoPagoLink) {
      window.location.href = mercadoPagoLink;
    } else if (redirectTo) {
      history.push(redirectTo);
    }
  });

  if (loading || mercadoPagoLink) {
    return (
      <section className='loading'>
        <CircularProgress />
      </section>
    );
  }

  return (
    <section className='cart-items section'>
      <ArrowLink url='/formaenvio' />
      <Titulo title='Tu Pedido' />
      <CheckOutMap
        cart={cart}
        cartRecargo={cartRecargo}
        metodoPago={metodoPago}
      />
      <CheckOutList
        metodoPago={metodoPago}
        formaEnvio={formaEnvio}
        numeroCompra={numeroCompra}
      />
      <CheckOutTotal />
      <FinalizarBtn numeroCompra={numeroCompra} />
    </section>
  );
};

export default Checkout;

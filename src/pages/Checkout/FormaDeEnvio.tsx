import React from 'react';
import ArrowLink from '../../components/Checkout/CheckoutComponents/ArrowLink';
import Select from '../../components/Checkout/Select';

const FormaDeEnvio = () => {
  return (
    <div>
      <section className='cart-items section'>
        <ArrowLink url='metodopago' />
        <Select
          name='formaEnvio'
          values={['Envío', 'Retiro en el local']}
          title='Forma de envío'
          link='/checkout'
        />
      </section>
    </div>
  );
};

export default FormaDeEnvio;

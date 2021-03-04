import { Zoom } from '@material-ui/core';
import React from 'react';
interface List {
  metodoPago: string | null;
  formaEnvio: string | null;
  numeroCompra: number | null;
}
const CheckOutList: React.FC<List> = ({
  metodoPago,
  formaEnvio,
  numeroCompra,
}) => {
  return (
    <Zoom in={true} style={{ transitionDelay: '300ms' }}>
      <div className='checkoutList'>
        <h3>Metodo de pago : </h3>
        <h5>{metodoPago}</h5>
        <h3>Forma de envío : </h3>
        <h5>{formaEnvio}</h5>
        <h3>Numero de compra :</h3>
        <h5>{numeroCompra}</h5>
      </div>
    </Zoom>
  );
};

export default CheckOutList;

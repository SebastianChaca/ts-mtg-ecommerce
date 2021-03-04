import { useEffect } from 'react';
import Select from '../../components/Checkout/Select';
import { useDispatch } from 'react-redux';
import { clearCartRecargo } from '../../state/action-creators/cartActions';

const MetodoPago = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCartRecargo());
  }, [dispatch]);
  return (
    <div>
      <section className='cart-items section'>
        <Select
          name='metodoPago'
          values={['Efectivo', 'Mercado Pago']}
          link='/formaenvio'
          title='Metodo de Pago'
        />
      </section>
    </div>
  );
};

export default MetodoPago;

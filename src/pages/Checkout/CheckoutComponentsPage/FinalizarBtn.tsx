import { useHistory } from 'react-router-dom';
import { Zoom } from '@material-ui/core';
import { useActions } from '../../../hooks/ReduxHooks/useActions';
import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';

interface CompraBtn {
  numeroCompra: number;
}
const FinalizarBtn: React.FC<CompraBtn> = ({ numeroCompra }) => {
  const history = useHistory();
  const { crearCompra } = useActions();
  const { cart, cartRecargo, total, totalRecargo } = useTypedSelector(
    (state) => state.cart
  );
  const { jwt } = useTypedSelector((state) => state.login);
  const { metodoPago, formaEnvio, loading, mercadoPagoLink } = useTypedSelector(
    (state) => state.checkout
  );

  const finalizarCompra = async () => {
    if (metodoPago === 'Mercado Pago') {
      crearCompra(
        jwt,
        cartRecargo,
        totalRecargo,
        metodoPago,
        formaEnvio,
        numeroCompra,
        mercadoPagoLink
      );
    } else {
      crearCompra(
        jwt,
        cart,
        total,
        metodoPago,
        formaEnvio,
        numeroCompra,
        mercadoPagoLink
      );
    }
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '300ms' }}>
      <button
        className='btn btn-primary btn-block'
        onClick={() => finalizarCompra()}
      >
        Finalizar Compra
      </button>
    </Zoom>
  );
};

export default FinalizarBtn;

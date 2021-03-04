import { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import DatosVendedor from '../../components/DatosVendedor/DatosVendedor';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../state/action-creators/checkoutAction';

const PagoAprobado = () => {
  const dispatch = useDispatch();
  const { loading } = useTypedSelector((state) => state.checkout);

  useEffect(() => {
    dispatch(clearCartAction());
  }, [dispatch]);

  if (loading) {
    return (
      <section className='loading'>
        <CircularProgress />
      </section>
    );
  }
  return (
    <>
      <DatosVendedor texto='Felicidades, tu pago ha sido aprobado !' />
    </>
  );
};

export default PagoAprobado;

import { useTypedSelector } from '../../../hooks/ReduxHooks/useTypedSelector';
import Zoom from '@material-ui/core/Zoom';

const CheckOutTotal = () => {
  const { total, totalRecargo } = useTypedSelector((state) => state.cart);

  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <h2>Total: {totalRecargo ? totalRecargo : total}</h2>
      </Zoom>
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <p style={{ color: 'red' }}>{totalRecargo > 0 && 'Recargo del 10%'}</p>
      </Zoom>
    </div>
  );
};

export default CheckOutTotal;

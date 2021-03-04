import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { useActions } from '../../hooks/ReduxHooks/useActions';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

const Alerta = () => {
  const { show, msg, severity } = useTypedSelector((state) => state.alert);
  const { alertFalse } = useActions();
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        alertFalse();
      }, 5000);
    }
  }, [show, alertFalse]);
  return (
    <div className='alert-container'>
      {show && (
        <Fade in={true} style={{ transitionDelay: '300ms' }}>
          <Alert variant='filled' severity={severity}>
            {msg}
          </Alert>
        </Fade>
      )}
    </div>
  );
};

export default Alerta;

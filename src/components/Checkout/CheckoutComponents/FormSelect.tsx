import { Button, Slide, Zoom } from '@material-ui/core';
import { useSelect } from '../../../hooks/CheckoutHooks/useSelect';
import Total from './CheckOutTotal';
import React from 'react';
import Titulo from '../../UI/Titulo';
import CheckOutTotal from './CheckOutTotal';

interface Form {
  title: string;
  selectValue: {
    name: string;
    value: string;
    link: string;
  };
}

const FormSelect: React.FC<Form> = ({ children, title, selectValue }) => {
  const trigger = useSelect();
  const handleSubmit = (e) => {
    e.preventDefault();
    trigger(selectValue);
  };
  return (
    <div>
      <Titulo title={title} />
      <form onSubmit={handleSubmit}>
        {children}
        <CheckOutTotal />
        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{ marginTop: 30 }}
            disabled={!selectValue.value}
          >
            Siguiente
          </Button>
        </Zoom>
      </form>
    </div>
  );
};

export default FormSelect;

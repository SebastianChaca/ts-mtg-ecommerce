import { Slide } from '@material-ui/core';
import React from 'react';
interface TituloInt {
  title: string;
}
const Titulo: React.FC<TituloInt> = ({ title }) => {
  return (
    <Slide direction='down' in={true} mountOnEnter unmountOnExit timeout={300}>
      <h2> {title} </h2>
    </Slide>
  );
};

export default Titulo;

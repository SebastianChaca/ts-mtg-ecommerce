import { Slide, Zoom } from '@material-ui/core';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
interface URL {
  url: string;
}
const ArrowLink: React.FC<URL> = ({ url }) => {
  return (
    <Slide direction='down' in={true} mountOnEnter unmountOnExit timeout={300}>
      <Link to={url}>
        <FaArrowLeft />
      </Link>
    </Slide>
  );
};

export default ArrowLink;

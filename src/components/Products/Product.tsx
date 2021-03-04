import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import sinimagen from '../../assets/sinimagen.png';

interface Products {
  image: string[] | null;
  title: string;
  id: string;
  price: number;
}

const Product: React.FC<Products> = ({ image, title, id, price }) => {
  return (
    <Zoom in={true} style={{ transitionDelay: '300ms' }}>
      <article className='product'>
        <div className='img-container'>
          {image ? (
            <img src={image ? image[0] : sinimagen} alt={title} />
          ) : (
            <img src={sinimagen} alt={title} />
          )}

          <Link to={`products/${id}`} className='btn btn-primary product-link'>
            details
          </Link>
        </div>
        <div className='product-footer'>
          <p className='product-title'>{title || 'Default Title'}</p>
          <p className='product-price'>${price || 0}</p>
        </div>
      </article>
    </Zoom>
  );
};
export default Product;

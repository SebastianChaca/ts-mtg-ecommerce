import { useState } from 'react';
import { Product } from '../../../state/interfaces/productInterface';
import { Cart } from '../../../state/interfaces/cartInterfaces';
import Slide from '@material-ui/core/Slide';
import StockCount from './StockCount';
import { makeStylesProductDetail } from '../../../utils/styles';
import ImgCarousel from './ImgCarousel';
import ProductDetailbtn from './ProductDetailbtn';

interface ProductDet {
  product: Product;
  idParam: string;
}
const ProductDetail: React.FC<ProductDet> = ({ product, idParam }) => {
  const classes = makeStylesProductDetail();
  const [quantity, setQuantity] = useState(1);
  const { id, categoria, stock, image, price, title, description } = product;
  const newStock = stock - quantity;
  const unit_price = price;
  const newCart: Cart = {
    id,
    categoria,
    newStock,
    image,
    unit_price,
    title,
    description,
    quantity,
  };

  return (
    <section className='single-product'>
      <ImgCarousel image={image} />
      <Slide direction='left' in={true} timeout={300}>
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <StockCount
            stock={stock}
            quantity={quantity}
            classes={classes}
            setQuantity={setQuantity}
          />
          <ProductDetailbtn stock={stock} newCart={newCart} />
        </article>
      </Slide>
    </section>
  );
};
export default ProductDetail;

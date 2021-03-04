import { useHistory } from 'react-router-dom';
import { useActions } from '../../../hooks/ReduxHooks/useActions';
import { Cart } from '../../../state/interfaces/cartInterfaces';
interface ProductBtn {
  stock: number;
  newCart: Cart;
}
const ProductDetailbtn: React.FC<ProductBtn> = ({ stock, newCart }) => {
  const history = useHistory();
  const { addItem } = useActions();
  return (
    <div>
      {stock > 0 && (
        <button
          className='btn btn-primary btn-block'
          onClick={() => {
            addItem(newCart);
            history.push('/cart');
          }}
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default ProductDetailbtn;

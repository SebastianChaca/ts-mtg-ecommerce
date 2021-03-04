import axios from 'axios';
export const updateStock = (shopCart) => {
  shopCart.forEach(async (shop) => {
    let { id, stock } = shop;
    await axios.put(`http://localhost:1337/products/${id}`, {
      stock,
    });
  });
};

import { Product } from '../state/interfaces/productInterface';
import { ProductsFromDB } from '../state/interfaces/productInterface';

export function cleanProducts(data: ProductsFromDB[]): Product[] {
  return data.map((item) => {
    let image =
      item.image.length === 0
        ? null
        : item.image.map((img) => {
            return img.url;
          });
    let stock = parseInt(item.stock);
    let price = parseInt(item.price);
    delete item.__v;
    delete item._id;
    return { ...item, image, stock, price };
  });
}

export function paginate(products: Product[]): Product[][] {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  const newProducts = Array.from({ length: numberOfPages }, () => {
    return products.splice(0, itemsPerPage);
  });
  return newProducts;
}
export function categorias(productos: ProductsFromDB[]): string[] {
  const categorias = productos.map((producto) => {
    return producto.categoria;
  });

  const categoriasUnicas = Array.from(new Set(categorias));
  categoriasUnicas.push('Todas');
  return categoriasUnicas;
}

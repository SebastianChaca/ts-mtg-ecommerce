export interface Product {
  categoria: string;
  image: string[];
  id: string;
  price: number;
  title: string;
  stock: number;
  description: string;
}
export interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
  paginatedProd: Product[][];
  categorias: string[];
}
export interface ProductsFromDB {
  categoria: string;
  image: any;
  id: string;
  _id?: string;
  price: string;
  title: string;
  stock: string;
  description: string;
  __v?: number;
}

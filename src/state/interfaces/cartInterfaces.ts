export interface Cart {
  categoria: string;
  image: string[];
  id: string;
  unit_price: number;
  title: string;
  newStock: number;
  quantity: number;
  description: string;
}
export interface CartState {
  cart: Cart[];
  cartRecargo: Cart[];
  totalRecargo: number;
  quantity: number;
  total: number;
  checkoutMode: boolean;
}

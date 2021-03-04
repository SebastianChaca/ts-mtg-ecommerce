import React from 'react';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Prodcuts';
import ProductDetails from '../pages/Products/ProductDetails';
import LoginPage from '../pages/Login/LoginPage';
import MetodoPago from '../pages/Checkout/MetodoPago';
import FormaDeEnvio from '../pages/Checkout/FormaDeEnvio';
import Checkout from '../pages/Checkout/Checkout';
import PagoAprobado from '../pages/Pagos/PagoAprobado';
import PagoEfectivo from '../pages/Pagos/PagoEfectivo';
import About from '../pages/About/About';

export interface RoutesInterface {
  path: string;

  component: JSX.Element;
}

export const routes: RoutesInterface[] = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/products',
    component: <Products />,
  },
  {
    path: '/products/:idParam',
    component: <ProductDetails />,
  },
  {
    path: '/cart',
    component: <Cart />,
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/about',
    component: <About />,
  },
];

export const privateRoutes: RoutesInterface[] = [
  {
    path: '/metodopago',
    component: <MetodoPago />,
  },
  {
    path: '/formaenvio',
    component: <FormaDeEnvio />,
  },
  {
    path: '/checkout',
    component: <Checkout />,
  },
  {
    path: '/pagoaprobado',
    component: <PagoAprobado />,
  },
  {
    path: '/efectivo',
    component: <PagoEfectivo />,
  },
];

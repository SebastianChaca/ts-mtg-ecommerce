export interface CheckOut {
  metodoPago: string | null;
  formaEnvio: string | null;
  mercadoPagoLink: string | null;
  loading: boolean;
  compraAtuh: boolean;
  idCompra: number | null;
  redirectTo: string | null;
}

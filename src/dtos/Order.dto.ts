export interface CreateOrderDto {
  orderBasePrice: number;
  orderDiscount: number;
  orderNetPrice: number;
  createdBy: string;
  updatedBy?: string;
  orderProduct: OrderProductDto[]
}

export interface OrderProductDto {
  productId: string;
  productAmount: number;
}
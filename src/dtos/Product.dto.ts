export interface CreateProductDto {
  productName: string;
  price: number;
  description: string;
  stock: number;
  createdBy: string;
}
export interface UpdateProductDto {
  productId: string;
  productName: string;
  price: number;
  description: string;
  stock: number;
  updatedBy: string;
}
export interface UpdatePriceDto {
  productId: string;
  price: number;
  updatedBy: string;
}
export interface UpdateStockDto {
  productId: string;
  stock: number;
  updatedBy: string;
}

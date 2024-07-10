import { CreateProductDto, UpdatePriceDto, UpdateProductDto, UpdateStockDto } from '@/dtos';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getProducts() {
  const product = await prisma.product.findMany();
  return product;
}
export async function getProductsByProductId(id: string) {
  const response = await prisma.product.findUnique({
    where: {
      productId: id
    }
  });
  return response;
}
export async function getProductsByProductName(name: string) {
  const response = await prisma.product.findUnique({
    where: {
      productName: name
    }
  });
  return response;
}
export async function createProduct(productDto: CreateProductDto) {
  const product = await prisma.product.create({
    data: {
      productName: productDto.productName,
      price: productDto.price,
      description: productDto.description,
      stock: productDto.stock,
      createdBy: productDto.createdBy
    }
  });
  return product;
}
export async function updateProduct(productDto: UpdateProductDto) {
    const product = await prisma.product.update({
      where: {
        productId: productDto.productId
      },
      data: {
        productName: productDto.productName,
        price: productDto.price,
        description: productDto.description,
        stock: productDto.stock,
        updatedBy: productDto.updatedBy
      }
    });
    return product;
  }
export async function updatePrice(productDto: UpdatePriceDto) {
  const product = await prisma.product.update({
    where: {
      productId: productDto.productId
    },
    data: {
      price: productDto.price,
      updatedBy: productDto.updatedBy
    }
  });
  return product;
}
export async function updateStock(productDto: UpdateStockDto) {
  const product = await prisma.product.update({
    where: {
      productId: productDto.productId
    },
    data: {
      stock: productDto.stock,
      updatedBy: productDto.updatedBy
    }
  });
  return product;
}

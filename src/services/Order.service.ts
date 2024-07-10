import { CreateOrderDto } from '@/dtos';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getOrder() {
  const order = await prisma.order.findMany({
    include: { orderProduct: { include: { product: true } } }
  });
  return order;
}
export async function getOrderByOrderId(id: string) {
  const response = await prisma.order.findUnique({
    where: {
      orderId: id
    },
    include: { orderProduct: { include: { product: true } } }
  });
  return response;
}
export async function getOrderProduct() {
  const order = await prisma.orderProduct.findMany();
  return order;
}
export async function createOrder(orderDto: CreateOrderDto) {
  const order = await prisma.order.create({
    data: {
      orderBasePrice: orderDto.orderBasePrice,
      orderDiscount: orderDto.orderDiscount,
      orderNetPrice: orderDto.orderBasePrice,
      createdBy: orderDto.createdBy,
      orderProduct: {
        create: orderDto.orderProduct
      }
    }
  });
  return order;
}

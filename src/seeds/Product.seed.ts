import { Prisma, PrismaClient } from '@prisma/client';

export default function genProducts(prisma: PrismaClient, userId: string) {
  try {
    const list: Prisma.ProductCreateManyInput[] = [
      {
        productName: 'Handcrafted Plastic Keyboard',
        price: 7865.34,
        description:
          'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
        stock: 41,
        createdBy: userId
      },
      {
        productName: 'Bespoke Bronze Fish',
        price: 7164.36,
        description:
          'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
        stock: 11,
        createdBy: userId
      },
      {
        productName: 'Elegant Granite Sausages',
        price: 3374.67,
        description:
          'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
        stock: 49,
        createdBy: userId
      },
      {
        productName: 'Luxurious Rubber Computer',
        price: 8422.03,
        description:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        stock: 49,
        createdBy: userId
      },
      {
        productName: 'Incredible Cotton Hat',
        price: 5810.68,
        description:
          'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        stock: 16,
        createdBy: userId
      },
      {
        productName: 'Handmade Bronze Hat',
        price: 1293.7,
        description:
          'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        stock: 72,
        createdBy: userId
      },
      {
        productName: 'Elegant Bronze Shirt',
        price: 6884.46,
        description:
          'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
        stock: 92,
        createdBy: userId
      },
      {
        productName: 'Ergonomic Cotton Pants',
        price: 6129.47,
        description:
          'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        stock: 17,
        createdBy: userId
      },
      {
        productName: 'Bespoke Steel Bacon',
        price: 3129.64,
        description:
          'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
        stock: 9,
        createdBy: userId
      },
      {
        productName: 'Gorgeous Metal Bacon',
        price: 4018.93,
        description:
          'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        stock: 12,
        createdBy: userId
      }
    ];

    return prisma.product.createMany({ data: list });
  } catch (e) {
    throw e;
  }
}

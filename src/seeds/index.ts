import { PrismaClient } from '@prisma/client';
import genProducts from './Product.seed';

import genUsers from './User.seed';

const prisma = new PrismaClient();
export async function seeder() {
  try {
    const users = await genUsers(prisma);
    await genProducts(prisma, users[0].userId);
  } catch (e) {
    throw e;
  }
}

seeder()
  .then(() => console.log('Seeding completed'))
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

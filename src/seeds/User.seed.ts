import { fakerInstance } from '@/instances';
import { Prisma, PrismaClient } from '@prisma/client';
import * as crypto from 'crypto-js';

export default function genUsers(prisma: PrismaClient) {
  try {
    const list: Prisma.UserCreateManyInput[] = [
      {
        userName: 'user_1',
        userEmail: 'user1@mail.com',
        userFirstName: fakerInstance.person.firstName(),
        userLastName: fakerInstance.person.lastName(),
        userPassword: crypto.SHA256('password').toString(),
        userPhone: fakerInstance.phone.number()
      }
    ];
    return prisma.user.createManyAndReturn({ data: list });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

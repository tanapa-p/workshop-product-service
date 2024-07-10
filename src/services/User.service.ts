import { CreateUserDto, UpdateUserDto } from '@/dtos/User.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getUsersByUserId(id: string) {
  const response = await prisma.user.findUnique({
    where: {
      userId: id
    }
  });
  return response;
}

export async function createUser(userDto: CreateUserDto) {
  const user = await prisma.user.create({
    data: {
      userName: userDto.userName,
      userFirstName: userDto.userFirstName,
      userLastName: userDto.userLastName,
      userPassword: userDto.userPassword,
      userEmail: userDto.userEmail,
      userPhone: userDto.userPhone,
    }
  });
  return user;
}

export async function updateUser(userDto: UpdateUserDto) {
  const user = await prisma.user.update({
    where: {
      userId: userDto.userId
    },
    data: {
      userName: userDto.userName,
      userFirstName: userDto.userFirstName,
      userLastName: userDto.userLastName,
      userPassword: userDto.userPassword,
      userEmail: userDto.userEmail,
      userPhone: userDto.userPhone,
    }
  });
  return user;
}

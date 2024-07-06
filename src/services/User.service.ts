import { CreateUserDto, UpdateUserDto } from '@/dtos/User.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
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

export async function createUser(createUserDto: CreateUserDto) {
  let {userName, userFirstName, userLastName, userPassword, userEmail, userPhone } = createUserDto;

  const user = await prisma.user.create({
    data: {
      userName,
      userFirstName,
      userLastName,
      userPassword,
      userEmail,
      userPhone: userPhone ? userPhone : '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
  return user;
}

export async function updateUser(updateUserDto: UpdateUserDto) {
  const user = await prisma.user.update({
    where: {
      userId: updateUserDto.userId
    },
    data: {
      userName: updateUserDto.userName,
      userFirstName: updateUserDto.userFirstName,
      userLastName: updateUserDto.userLastName,
      userPassword: updateUserDto.userPassword,
      userEmail: updateUserDto.userEmail,
      userPhone: updateUserDto.userPhone,
      updatedAt: new Date()
    }
  });
  return user;
}

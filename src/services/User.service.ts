import { RequestHandler,Response } from 'express'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export function getUsers(){
    const users =  prisma.user.findMany();
    console.log(users);
      return users
}
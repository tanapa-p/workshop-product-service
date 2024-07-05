import { Router, Request, Response } from 'express';
const router = Router();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



router.get("/users",  async function (req: Request, res: Response) {
    const users = await prisma.user.findMany();
    console.log(users);
    res.send(users);
});

import { getUsers } from '../services/User.service';
router.get("/getUsers",  async function (req: Request, res: Response) {
    console.log(getUsers);
    res.send(getUsers());
});

export default router;
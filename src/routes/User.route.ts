import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createUser, getUsers, getUsersByUserId, updateUser } from '@/services';

const router = Router();

router.get('/', async function (req: Request, res: Response) {
  const result = await getUsers();
  res.send(result);
});

router.get('/:id', async function (req: Request, res: Response) {
  try {
    const response = await getUsersByUserId(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

router.post('/createUser', async function (req: Request, res: Response) {
  try {
    const response = await createUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

router.post('/updateUser', async function (req: Request, res: Response) {
  try {
    const response = await updateUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

export default router;

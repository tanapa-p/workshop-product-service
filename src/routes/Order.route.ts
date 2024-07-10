import {
  createOrder,
  getOrder,
  getOrderByOrderId,
  getOrderProduct
} from '@/services';

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async function (req: Request, res: Response) {
  const result = await getOrder();
  res.send(result);
});
router.get('/product', async function (req: Request, res: Response) {
  const result = await getOrderProduct();
  res.send(result);
});
router.get('/:id', async function (req: Request, res: Response) {
  try {
    const response = await getOrderByOrderId(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});
router.post('/createOrderProduct', async function (req: Request, res: Response) {
    try {
      await createOrder(req.body);
      res.send(200);
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  }
);

export default router;

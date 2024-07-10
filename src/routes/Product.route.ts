import { Router, Request, Response } from 'express';
import {
  createProduct,
  getProducts,
  getProductsByProductId,
  getProductsByProductName,
  updatePrice,
  updateProduct,
  updateStock
} from '@/services';

const router = Router();

router.get('/', async function (req: Request, res: Response) {
  const result = await getProducts();
  res.send(result);
});

router.get('/:id', async function (req: Request, res: Response) {
  try {
    const response = await getProductsByProductId(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

router.post('/createProduct', async function (req: Request, res: Response) {
  try {
    let product = await getProductsByProductName(req.body.productName);
    if (!product) {
      const response = await createProduct(req.body);
      res.status(200).json(response);
    } else {
      res.status(400).send('Duplicate Product');
    }
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});
router.post('/updateProduct', async function (req: Request, res: Response) {
    try {
        const response = await updateProduct(req.body);
        res.status(200).json(response);
      } catch (error) {
        res.status(404).json({ msg: error });
      }
});
router.post('/updatePrice', async function (req: Request, res: Response) {
  try {
    const response = await updatePrice(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});
router.post('/updateStock', async function (req: Request, res: Response) {
  try {
    const response = await updateStock(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

export default router;

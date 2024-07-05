import { Router, Request, Response } from 'express';
const router = Router();

router.get("/",  function (req: Request, res: Response) {
    res.send("home");
});

router.get("/products", function (req: Request, res: Response) {
    res.send("products");
});

export default router;
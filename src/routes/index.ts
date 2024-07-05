//export * from './Product.route'

import express from 'express';
import productRoute from './Product.route';
import userRoute from './User.route'

export const routes = express.Router();

routes.use(productRoute);
routes.use(userRoute);

export default routes; 


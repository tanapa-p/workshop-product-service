//export * from './Product.route'

import express from 'express';
import productRoute from './Product.route';
import userRoute from './User.route'

export const routes = express.Router();

routes.use('/products', productRoute);
routes.use('/users', userRoute);

export default routes; 


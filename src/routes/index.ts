//export * from './Product.route'

import express from 'express';
import productRoute from './Product.route';
import userRoute from './User.route'
import orderRoute from './Order.route';

export const routes = express.Router();

routes.use('/products', productRoute);
routes.use('/users', userRoute);
routes.use('/orders', orderRoute);

export default routes; 


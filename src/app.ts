import express, { Express } from 'express';
import everthing, { create } from './controller/products';
import validNameProducts, { validAmountProducts } from './middleware/products';

const app: Express = express();

app.use(express.json());

app.get('/products', everthing);

app.post('/products', validNameProducts, validAmountProducts, create);

export default app;

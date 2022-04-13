import express, { Express } from 'express';
import everthing, { create } from './controller/products';
import validNameProducts, { validAmountProducts, validAProducts } from './middleware/products';
import createUsers from './controller/users';
import validUsername, { validUserLevel, validUserPassword, 
  validUserClasse } from './middleware/users';
import everthingOrder, { createOrder } from './controller/order';
import createLogin from './controller/login';
import validLogin from './middleware/login';
import verifyToken from './middleware/order';

const app: Express = express();

app.use(express.json());

app.get('/products', everthing);

app.post('/products', validNameProducts, validAmountProducts, create);

app.post('/users', validUsername, validUserLevel, validUserPassword, validUserClasse, createUsers);

app.get('/orders', everthingOrder);

app.post('/login', validLogin, createLogin);

app.post('/orders', verifyToken, validAProducts, createOrder);

export default app;

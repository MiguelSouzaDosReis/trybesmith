import express, { Express } from 'express';
import everthing, { create } from './controller/products';
import validNameProducts, { validAmountProducts } from './middleware/products';
import createUsers from './controller/users';
import validUsername, { validUserLevel, validUserPassword, 
  validUserClasse } from './middleware/users';
import everthingOrder from './controller/order';
import createLogin from './controller/login';
import validLogin from './middleware/login';

const app: Express = express();

app.use(express.json());

app.get('/products', everthing);

app.post('/products', validNameProducts, validAmountProducts, create);

app.post('/users', validUsername, validUserLevel, validUserPassword, validUserClasse, createUsers);

app.get('/orders', everthingOrder);

app.post('/login', validLogin, createLogin);

export default app;

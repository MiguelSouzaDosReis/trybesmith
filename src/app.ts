import express, { Express } from 'express';
import everthing, { create } from './controller/products';
import validNameProducts, { validAmountProducts } from './middleware/products';
import createUsers from './controller/users';
import validUsername, { validUserLevel, validUserPassword, 
  validUserClasse } from './middleware/users';

const app: Express = express();

app.use(express.json());

app.get('/products', everthing);

app.post('/products', validNameProducts, validAmountProducts, create);

app.post('/users', validUsername, validUserLevel, validUserPassword, validUserClasse, createUsers);

export default app;

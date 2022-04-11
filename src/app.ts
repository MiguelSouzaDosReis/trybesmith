import express, { Express } from 'express';
import everthing from './controller/products';

const app: Express = express();

app.use(express.json());

app.get('/products', everthing);

export default app;

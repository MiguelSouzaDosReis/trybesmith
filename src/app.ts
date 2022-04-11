import express from 'express';
import everthing from './controller/products';

const app = express();

app.use(express.json());

app.get('/products', everthing);

export default app;

import { Request, Response } from 'express';
import CRUDProducts from '../models/products';
import connection from '../models/connection';

const everthing = async (_req: Request, res: Response) => {
  const products = await new CRUDProducts(connection).getAll();

  res.status(200).json(products);
};

export default everthing;

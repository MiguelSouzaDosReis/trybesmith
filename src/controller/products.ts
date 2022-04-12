import { Request, Response } from 'express';
import CRUDProducts from '../models/products';
import connection from '../models/connection';

const everthing = async (_req: Request, res: Response) => {
  const products = await new CRUDProducts(connection).getAll();

  res.status(200).json(products);
};

export const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const products = await new CRUDProducts(connection).create(name, amount);

  res.status(201).json(products);
};

export default everthing;
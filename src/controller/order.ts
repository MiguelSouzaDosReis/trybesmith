import { Request, Response } from 'express';
import CRUDOrder from '../models/order';
import connection from '../models/connection';

const everthingOrder = async (_req: Request, res: Response) => {
  const products = await new CRUDOrder(connection).getAll();

  res.status(200).json(products);
};

export default everthingOrder;
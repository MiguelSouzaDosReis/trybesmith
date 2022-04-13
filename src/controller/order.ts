import { Request, Response } from 'express';
import CRUDOrder from '../models/order';
import connection from '../models/connection';

interface TokenInReq extends Request {
  tokenData?: { username: string, iat: number, exp: number };
}

const everthingOrder = async (_req: Request, res: Response) => {
  const order = await new CRUDOrder(connection).getAll();

  res.status(200).json(order);
};

export const createOrder = async (req: TokenInReq, res: Response) => {
  const { products } = req.body;
  if (req.tokenData) {
    const { username } = req.tokenData;
    console.log(username); 
    const order = await new CRUDOrder(connection).create(products, username);
    res.status(201).json(order);
  } else {
    console.log('tokenData erro');
  }
};

export default everthingOrder;
import { Request, Response } from 'express';
import CRUDUsers from '../models/users';
import connection from '../models/connection';

const createUsers = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  await new CRUDUsers(connection).create(username, classe, level, password);
  let token = Array.from({ length: 16 });
  token = token.map((_e: any) => String.fromCharCode(64 + Math.random() * 23));
  res.status(201).json({ token: token.join('') });
};

export default createUsers;

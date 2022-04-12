import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import CRUDUsers from '../models/users';
import connection from '../models/connection';

const createUsers = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  await new CRUDUsers(connection).create(username, classe, level, password);
  const jwtConfig:SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const jwtToken = jwt.sign({ username }, 'segredo', jwtConfig);
  return res.status(201).json({ token: jwtToken });
};

export default createUsers;

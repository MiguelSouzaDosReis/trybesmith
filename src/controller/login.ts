import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import connection from '../models/connection';
import CRUDUsers from '../models/users';

const createLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const jwtConfig:SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const login = await new CRUDUsers(connection).getUser(username, password);
  console.log(login);
  if (login.length) {
    const jwtToken = jwt.sign({ username }, 'segredo', jwtConfig);
    return res.status(200).json({ token: jwtToken });
  }
  return res.status(401).json({ error: 'Username or password invalid' });
};

export default createLogin;
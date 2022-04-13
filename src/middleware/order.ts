import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenData {
  username: string,
  iat: number,
  exp: number
}
interface TokenInReq extends Request {
  tokenData?: { username: string, iat: number, exp: number };
}

const verifyToken = async (req: TokenInReq, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) { return res.status(401).json({ error: 'Token not found' }); }
  try {
    const verifiy = jwt.verify(authorization, 'segredo') as TokenData; 
    req.tokenData = verifiy;
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' }); 
  }
  next();
};

export default verifyToken;
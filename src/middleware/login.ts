import { Request, Response, NextFunction } from 'express';

const validLogin = async (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;
  if (!username) { return res.status(400).json({ error: 'Username is required' }); }

  if (!password) { return res.status(400).json({ error: 'Password is required' }); }

  next();
};

export default validLogin;

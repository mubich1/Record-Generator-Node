import * as config from '../../envirements/index'
import jwt from 'jsonwebtoken';

export const verifyToken = (req:any, res:any, next:any) => {
  console.log('req: ', req);
    // return true
  let token = req?.body?.token || req?.query?.token || req?.headers?.authorization;
  console.log(token, 'token')

  if (!token) {
    return res?.status(403).send("A token is required for authentication");
  }
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, (config.TOKEN_KEY || process.env.TOKEN_KEY));
    req.user = decoded;
  } catch (err) {
    console.log(err, 'errpr')
    return res?.status(401).send("Invalid Token");
  }
  return next();
}
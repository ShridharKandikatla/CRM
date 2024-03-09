import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized');
    }
    req.id = decoded.id;
    next();
  });
}

export default authMiddleware;

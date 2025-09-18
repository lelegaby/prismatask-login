import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido.' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'segredo');
    req.userEmail = decoded.email;
    next();
  } catch {
    res.status(403).json({ error: 'Token inválido.' });
  }
}

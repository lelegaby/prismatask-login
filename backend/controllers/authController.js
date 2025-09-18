import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from '../utils/users.js';

export async function register(req, res) {
  const { name, email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: 'E-mail já cadastrado.' });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashed });

  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: 'Usuário não encontrado.' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Senha incorreta.' });

  const token = jwt.sign({ email: user.email }, 'segredo', { expiresIn: '1h' });
  res.json({ message: 'Login realizado com sucesso!', token });
}

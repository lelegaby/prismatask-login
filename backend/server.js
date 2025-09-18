import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
import { authMiddleware } from './middlewares/authMiddleware.js';

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Perfil acessado com sucesso!', email: req.userEmail });
});

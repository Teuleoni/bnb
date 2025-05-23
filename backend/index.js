import 'dotenv/config';
import express from 'express';
import PlacesRoutes from './domains/users/places/routes.js';
import UserRoutes from './domains/users/routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
); // <-- use aqui
app.use('/users', UserRoutes);
app.use('/places', PlacesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}`);
});

//express é uma biblioteca pra rodar servidor HTTP com node.js

// Usando a biblioteca express pra rodar o servidor HTTP na porta 3001

import express from "express";
import { routes } from './gateway/routes';
import { config } from 'dotenv';

config()

const app = express();

app.use(express.json());
app.use(routes);

app.listen(
    process.env.HTTP_PORT, 
    () => `servidor rodando na porta ${process.env.HTTP_PORT}`
)
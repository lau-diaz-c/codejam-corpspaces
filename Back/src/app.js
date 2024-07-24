import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import reservaRoutes from './routes/reserva.routes.js'; 

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use("/api", reservaRoutes);

export default app;

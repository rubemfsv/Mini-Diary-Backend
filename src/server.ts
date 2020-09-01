import 'reflect-metadata';
import dotenv from 'dotenv';
import cors from 'cors';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!');
});

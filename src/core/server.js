import express from 'express';
import { errorHandler } from '../middlewares/error-handler';
import { router } from './router';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errorHandler);

export const start = () =>
  new Promise((resolve) => app.listen(process.env.PORT, () => resolve(app)));

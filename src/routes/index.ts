import { Router } from 'express';
import notesRouter from './notes.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/notes', notesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

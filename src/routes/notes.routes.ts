/* eslint-disable camelcase */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import NotesRepository from '../repositories/NotesRepository';
import CreateNoteService from '../services/CreateNoteService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const notesRouter = Router();

notesRouter.use(ensureAuthenticated);

notesRouter.get('/', async (request, response) => {
  try {
    const notesRepository = getCustomRepository(NotesRepository);

    const notes = await notesRepository.find();

    return response.json(notes);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

notesRouter.post('/', async (request, response) => {
  try {
    const { user_id, text } = request.body;

    const createNote = new CreateNoteService();

    const note = await createNote.execute({ user_id, text });

    return response.json(note);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default notesRouter;

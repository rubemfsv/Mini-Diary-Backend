import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import NotesRepository from '../repositories/NotesRepository';
import CreateNoteService from '../services/CreateNoteService';

const notesRouter = Router();

notesRouter.get('/', async (request, response) => {
  const notesRepository = getCustomRepository(NotesRepository);
  const notes = await notesRepository.find();

  return response.json(notes);
});

notesRouter.post('/', async (request, response) => {
  try {
    const { text } = request.body;

    const createNote = new CreateNoteService();

    const note = await createNote.execute({ text });

    return response.json(note);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default notesRouter;

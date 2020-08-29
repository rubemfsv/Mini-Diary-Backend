import { Router } from 'express';

import NotesRepository from '../repositories/NotesRepository';
import CreateNoteService from '../services/CreateNoteService';

const notesRouter = Router();
const notesRepository = new NotesRepository();

notesRouter.get('/', (request, response) => {
  try {
    const notes = notesRepository.all();

    return response.json(notes);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

notesRouter.post('/', (request, response) => {
  try {
    const { text } = request.body;

    const createNote = new CreateNoteService(notesRepository);

    const note = createNote.execute({ text });

    return response.json(note);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default notesRouter;

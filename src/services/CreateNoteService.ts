/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm';

import Note from '../models/Note';
import NotesRepository from '../repositories/NotesRepository';

interface RequestDTO {
  text: string;
  user_id: string
}

class CreateNoteService {
  public async execute({ user_id, text }: RequestDTO): Promise<Note> {
    const notesRepository = getCustomRepository(NotesRepository);

    const note = notesRepository.create({
      user_id,
      text,
    });

    await notesRepository.save(note);

    return note;
  }
}

export default CreateNoteService;

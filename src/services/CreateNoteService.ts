import { getCustomRepository } from 'typeorm';

import Note from '../models/Note';
import NotesRepository from '../repositories/NotesRepository';

interface RequestDTO {
  text: string;
}

class CreateNoteService {
  public async execute({ text }: RequestDTO): Promise<Note> {
    const notesRepository = getCustomRepository(NotesRepository);

    const note = notesRepository.create({
      text,
    });

    await notesRepository.save(note);

    return note;
  }
}

export default CreateNoteService;

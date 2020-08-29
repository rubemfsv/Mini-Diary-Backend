import Note from '../models/Note';
import NotesRepository from '../repositories/NotesRepository';

interface RequestDTO {
  text: string;
}

class CreateNoteService {
  private notesRepository: NotesRepository;

  constructor(notesRepository: NotesRepository) {
    this.notesRepository = notesRepository;
  }

  public execute({ text }: RequestDTO): Note | null {
    const note = this.notesRepository.create({
      text,
    });

    return note;
  }
}

export default CreateNoteService;

import Note from '../models/Note';

interface CreateNoteDTO {
  text: string;
}

class NotesRepository {
  private notes: Note[];

  constructor() {
    this.notes = [];
  }

  public all(): Note[] {
    return this.notes;
  }

  public create({ text }: CreateNoteDTO): Note | null {
    const note = new Note({ text });

    this.notes.push(note);

    return note;
  }
}

export default NotesRepository;

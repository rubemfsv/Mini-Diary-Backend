import { v4 } from 'uuid';

class Note {
  id: string;

  text: string;

  constructor({ text }: Omit<Note, 'id'>) {
    this.id = v4();
    this.text = text;
  }
}

export default Note;

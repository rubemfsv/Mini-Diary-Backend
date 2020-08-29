import { EntityRepository, Repository } from 'typeorm';
import Note from '../models/Note';

@EntityRepository(Note)
class NotesRepository extends Repository<Note> {

}

export default NotesRepository;

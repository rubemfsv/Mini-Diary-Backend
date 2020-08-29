import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;
}

export default Note;

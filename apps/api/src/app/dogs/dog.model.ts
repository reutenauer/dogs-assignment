import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: "dogs" })
export class DogModel {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  color: string;
}

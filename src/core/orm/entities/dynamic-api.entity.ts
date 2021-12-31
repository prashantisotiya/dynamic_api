import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dynamic-api')
export class DynamicAPIEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column({ type: 'jsonb' })
  data: Object | string | boolean | [];
}

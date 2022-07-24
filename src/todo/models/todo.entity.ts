import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("todo")
export class ToDo {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ default: false })
  completed: boolean

}

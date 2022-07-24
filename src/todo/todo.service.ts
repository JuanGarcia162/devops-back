import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateToDoDto } from './dto/update-todo.dto';
import { ToDo } from './models/todo.entity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDo)
    private todoRepository: Repository<ToDo>,
  ) { }

  create(createToDoDto): Promise<ToDo> {
    return this.todoRepository.save(createToDoDto);
  }

  findAll(): Promise<ToDo[]> {
    return this.todoRepository.createQueryBuilder('to_do').orderBy('id', 'ASC').getMany();
  }

  findOne(id: number): Promise<ToDo> {
    return this.todoRepository.findOneBy({ id });
  }

  async update(id: number, updateToDoDto: UpdateToDoDto): Promise<ToDo> {
    const todo = await this.todoRepository.findOneBy({ id })
    if (!todo) {
      throw new NotFoundException();
    }
    todo.name = updateToDoDto.name;
    todo.completed = updateToDoDto.completed;
    return this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
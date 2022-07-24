import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoService } from './todo.service';
import { ToDoController } from './todo.controller';
import { ToDo } from './models/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [ToDoService],
  controllers: [ToDoController],
})
export class ToDoModule { }
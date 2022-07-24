import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateToDoDto } from './dto/update-todo.dto';
import { ToDo } from './models/todo.entity';
import { ToDoService } from './todo.service';

@Controller('todos')
export class ToDoController {
  constructor(private readonly todoService: ToDoService) { }

  @Post()
  create(@Body() createToDoDto: CreateToDoDto): Promise<ToDo> {
    return this.todoService.create(createToDoDto);
  }

  @Get()
  findAll(): Promise<ToDo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ToDo> {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateToDoDto: UpdateToDoDto): Promise<ToDo> {
    return this.todoService.update(id, updateToDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.todoService.remove(id);
  }
}
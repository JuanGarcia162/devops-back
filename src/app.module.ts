import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './todo/models/todo.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'fullstackbook-todo-nestjs',
    entities: [ToDo],
    synchronize: false,
  }), ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

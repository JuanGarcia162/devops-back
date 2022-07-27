import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let controller: TodosController;
  let mockTodo: Todo = new Todo();
  let todosService: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService, {
        provide: getRepositoryToken(Todo),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTodo),
          find: jest.fn().mockResolvedValue([mockTodo])
        }
      }],
    }).compile();

    controller = module.get<TodosController>(TodosController);
    todosService = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of todos', async () => {
      const result = [
        {
          "id": 1,
          "name": "write full stack book",
          "completed": false
        }
      ];
      jest.spyOn(todosService, 'findAll').mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    })
  })
});

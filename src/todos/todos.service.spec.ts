import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  let mockTodo: Todo = new Todo();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, {
        provide: getRepositoryToken(Todo),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTodo),
          find: jest.fn().mockResolvedValue([mockTodo])
        }
      }],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of todos', async () => {
      const todos = await service.findAll();
      expect(todos).toStrictEqual([mockTodo]);
    })
  })
});

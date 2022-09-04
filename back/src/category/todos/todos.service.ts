import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { TodosEntity } from './entities/todos.entities';
import { CategoryEntity } from '../entities/category.entities';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly TodosRepository: Repository<CategoryEntity>,
  ) {}

  async createTodo(
    AddTodo: CreateTodoDTO,
  ): Promise<UpdateResult | CategoryEntity> {
    const category = await this.TodosRepository.findOneBy({
      title: AddTodo.categoryName,
    });

    if (!category) {
      return await this.TodosRepository.save({
        title: AddTodo.categoryName,
        todos: [
          {
            id: 1,
            text: AddTodo.text,
          },
        ],
      });
    }
    category.todos.push({
      id: category.todos.length + 1,
      text: AddTodo.text,
      isCompleted: false,
    });

    const response = await this.TodosRepository.update(category.id, {
      ...category,
    });

    return response ? category : response;
  }

  async completeTodo(
    updateTodo: UpdateTodoDTO,
  ): Promise<TodosEntity | UpdateResult> {
    const category = await this.TodosRepository.findOneBy({
      id: updateTodo.categoryId,
    });

    category.todos.map((todo) =>
      todo.id == updateTodo.id ? (todo.isCompleted = !todo.isCompleted) : todo,
    );
    const updateCategoryResponse = await this.TodosRepository.update(
      category.id,
      {
        ...category,
      },
    );

    return updateCategoryResponse
      ? category.todos.find((todo) => todo.id == updateTodo.id)
      : updateCategoryResponse;
  }
}

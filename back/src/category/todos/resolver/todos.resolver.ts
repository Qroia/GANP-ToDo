import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TodosEntity } from '../entities/todos.entities';
import { UpdateTodoDTO } from '../dto/update-todo.dto';
import { CreateTodoDTO } from '../dto/create-todo.dto';
import { CategoryEntity } from '../../entities/category.entities';
import { TodosService } from '../todos.service';
import { UpdateResult } from 'typeorm';

@Resolver('todos')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => CategoryEntity)
  async createTodo(
    @Args('createTodo') AddTodo: CreateTodoDTO,
  ): Promise<CategoryEntity | UpdateResult> {
    return await this.todosService.createTodo(AddTodo);
  }

  @Mutation(() => TodosEntity)
  async completedTodo(
    @Args('updateTodo') updateTodo: UpdateTodoDTO,
  ): Promise<TodosEntity | UpdateResult> {
    return await this.todosService.completeTodo(updateTodo);
  }
}

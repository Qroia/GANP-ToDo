import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from './entities/category.entities';
import { CategoryService } from './category.service';
import { CategoryResolver } from './resolver/category.resolvers';
import { TodosResolver } from './todos/resolver/todos.resolver';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService, CategoryResolver, TodosService, TodosResolver],
})
export class CategoryModule {}

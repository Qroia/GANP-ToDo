import { CategoryService } from '../category.service';
import { Query, Resolver } from '@nestjs/graphql';
import { CategoryEntity } from '../entities/category.entities';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly CategoryService: CategoryService) {}

  @Query(() => [CategoryEntity])
  async categories(): Promise<CategoryEntity[]> {
    return await this.CategoryService.getAll();
  }
}

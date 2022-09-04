import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    public readonly CategoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAll(): Promise<CategoryEntity[]> {
    return await this.CategoryRepository.find();
  }
}

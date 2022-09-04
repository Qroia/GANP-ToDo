import { MigrationInterface, QueryRunner } from 'typeorm';
import { CategoryEntity } from '../category/entities/category.entities';

export class migrations1661094713967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const AddCategories = await queryRunner.manager.save(
      queryRunner.manager.create<CategoryEntity>(CategoryEntity, [
        {
          id: 123,
          title: 'Standard',
          todos: [
            {
              id: 1,
              text: 'Buy Milk',
              isCompleted: false,
            },
            {
              id: 2,
              text: 'Sell Milk',
              isCompleted: false,
            },
          ],
        },
        {
          id: 24234,
          title: 'Non-Standard',
          todos: [
            {
              id: 1,
              text: 'Buy Milk',
              isCompleted: true,
            },
            {
              id: 2,
              text: 'Sell Milk',
              isCompleted: false,
            },
          ],
        },
      ]),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM categories`);
  }
}

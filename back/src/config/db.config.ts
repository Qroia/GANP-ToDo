import { registerAs } from '@nestjs/config';
import { TodosEntity } from '../category/todos/entities/todos.entities';
import { CategoryEntity } from '../category/entities/category.entities';

export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [TodosEntity, CategoryEntity],
    //migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    synchronize: true,
    logging: true,
  };
});

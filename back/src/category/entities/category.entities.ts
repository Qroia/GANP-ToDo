import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TodosEntity } from '../todos/entities/todos.entities';
import { Exclude } from 'class-transformer';

@ObjectType()
@Entity('category')
export class CategoryEntity {
  @Field(() => ID)
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => [TodosEntity])
  @Column('jsonb')
  todos: TodosEntity[];
}

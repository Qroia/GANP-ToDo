import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@ObjectType('todosDTO')
@Entity('todos')
export class TodosEntity {
  @Field(() => ID)
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  text: string;

  @Field({ nullable: true })
  @Column({ default: false })
  isCompleted: boolean;
}

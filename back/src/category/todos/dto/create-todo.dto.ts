import { Field, InputType } from '@nestjs/graphql';

@InputType('todosInput')
export class CreateTodoDTO {
  @Field()
  categoryName: string;

  @Field()
  text: string;
}

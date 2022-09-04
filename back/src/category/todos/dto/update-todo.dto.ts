import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoDTO {
  @Field()
  categoryId: number;

  @Field()
  id: number;
}

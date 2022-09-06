import {Expose, Type} from "class-transformer";

export class Todo {
  @Expose()
  id: number

  @Expose()
  text: string;

  @Expose()
  isCompleted: boolean;
}

export class Categories {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  @Type(() => Todo)
  todos: Todo[];
}

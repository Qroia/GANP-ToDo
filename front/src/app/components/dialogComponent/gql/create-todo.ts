import {ICategory} from "../../../interfaces";
import { gql } from "apollo-angular";

export interface ICREATE_TODO {
  createTodo: ICategory;
}

export const CREATE_TODO = gql`
    mutation createTodo($createTodo: todosInput!) {
      createTodo(createTodo: $createTodo) {
        title
      }
    }
`

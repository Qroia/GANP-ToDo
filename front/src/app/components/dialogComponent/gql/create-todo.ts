import {ICategories} from "../../../interfaces";
import { gql } from "apollo-angular";

export interface ICREATE_TODO {
  createTodo: ICategories;
}

export const CREATE_TODO = gql`
    mutation createTodo($createTodo: todosInput!) {
      createTodo(createTodo: $createTodo) {
        id
        todos {
          id
        }
      }
    }
`

import { ITodo } from "../../../interfaces";
import { gql } from "apollo-angular";

export interface ICOMPLETE_TODO {
  completedTodo: ITodo;
}

export const COMPLETE_TODO = gql`
  mutation completedTodo($updateData: UpdateTodoDTO!) {
    completedTodo(updateTodo: $updateData) {
      isCompleted
    }
  }
`

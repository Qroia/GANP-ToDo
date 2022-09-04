import { ITodoComplete } from "../../../interfaces";
import { gql } from "apollo-angular";

export interface ICOMPLETE_TODO {
  completedTodo: ITodoComplete;
}

export const COMPLETE_TODO = gql`
  mutation completedTodo($updateData: UpdateTodoDTO!) {
    completedTodo(updateTodo: $updateData) {
      isCompleted
    }
  }
`

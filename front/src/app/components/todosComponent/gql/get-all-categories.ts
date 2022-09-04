import { ICategories } from "../../../interfaces";
import { gql } from "apollo-angular";

export interface IGET_ALL_CATEGORIES {
  categories: ICategories[]
}

export const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      id
      title
      todos {
        id
        text
        isCompleted
      }
    }
  }
`


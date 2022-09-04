import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { ICategory } from "../../interfaces";
import { CREATE_TODO, ICREATE_TODO } from "./gql/create-todo";

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private readonly apollo: Apollo,
  ) {}

  createTodo(text: string, categoryName: string): Observable<ICategory | undefined> {
    return this.apollo.mutate<ICREATE_TODO>({
      mutation: CREATE_TODO,
      variables: {
        createTodo: {
          categoryName, text
        },
      }
    }).pipe(map(({ data }) => data?.createTodo))
  }
}

import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { ICategories, ITodo } from "../../interfaces";
import { GET_ALL_CATEGORIES, IGET_ALL_CATEGORIES } from "./gql/get-all-categories";
import { COMPLETE_TODO, ICOMPLETE_TODO } from "./gql/complete-todo";

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(
    private readonly apollo: Apollo,
  ) {}

  getCategories(): Observable<ICategories[]> {
    return this.apollo.watchQuery<IGET_ALL_CATEGORIES>({
      query: GET_ALL_CATEGORIES,
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map(( { data} ) => data.categories))
  }

  completeTodo(categoryId: number, id: number): Observable<ITodo | undefined> {
    return this.apollo.mutate<ICOMPLETE_TODO>({
      mutation: COMPLETE_TODO,
      variables: {
        updateData: {
          categoryId: parseFloat(String(categoryId)), id: parseFloat(String(id))
        },
      }
    }).pipe(map(({data}) => data?.completedTodo))
  }
}

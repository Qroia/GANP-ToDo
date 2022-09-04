import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICategories } from "../interfaces";
import { TodosService } from "../components/todosComponent/todos.service";

@Injectable()
export class DataSharingService {

  constructor(
    private readonly todosService: TodosService,
  ) {}

  public categoriesData: BehaviorSubject<ICategories[]> = new BehaviorSubject(this.onRead());

  onRead() {
    const data: ICategories[] = [];
    // Get categories
    this.todosService.getCategories().subscribe(res => {
      for (let i = 0; i<res.length; i++) {
        data.push(res[i]);
      }
      // Sorting by count of tasks
      data.sort(( a, b) => b.todos.length - a.todos.length);
    })
    return data;
  }
}

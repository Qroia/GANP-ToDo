import { Component, OnInit } from "@angular/core";
import { ICategories } from "../../interfaces";
import { TodosService } from "./todos.service";
import { DataSharingService } from "../../sharing/data-sharing.service";

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
})
export class TodosComponent implements OnInit {

  categories: ICategories[] = [];

  constructor(
    private readonly todosService: TodosService,
    private dataSharingService: DataSharingService,
  ) {
  }

  ngOnInit() {
    this.dataSharingService.categoriesData.subscribe(res => {
      this.categories = res;
    })
  }

  todoComplete(categoryId: number, todoId: number) {
    // Complete todo
    this.todosService.completeTodo(categoryId, todoId).subscribe(res => {})

    // Edit todo array in TodosComponent
    this.categories.map(category => {
      if (category.id == categoryId) {
        category.todos.map(todos => todos.id == todoId ? todos.isCompleted = !todos.isCompleted : todos)
      }
    })
  }
}

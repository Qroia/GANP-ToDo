import { Component, OnInit } from "@angular/core";
import { ICategories } from "../../interfaces";
import { TodosService } from "./todos.service";
import { DataSharingService } from "../../sharing/data-sharing.service";
import {plainToClass} from "class-transformer";
import {Todo} from "../../sharing/categories-class-transformer";

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
    this.categories = this.dataSharingService.categoriesData
  }

  trackByFn(index: any, i: any) {
    return index;
  }

  todoComplete(categoryId: number, todoId: number) {
    // Complete todo
    this.todosService.completeTodo(categoryId, todoId).subscribe(res => {
      const categoriesRes = plainToClass(Todo, res);
      if (categoriesRes.isCompleted != undefined) {
        // Edit todo array in TodosComponent
        this.dataSharingService.categoriesData.map(category => {
          if (category.id == categoryId) {
            category.todos.map(todos => todos.id == todoId ? todos.isCompleted = !todos.isCompleted : todos)
          }
        })
      }
    })
  }
}

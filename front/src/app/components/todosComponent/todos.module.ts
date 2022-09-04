import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf, NgIf } from "@angular/common";
import { TodosComponent } from "./todos.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [TodosComponent],
  imports: [
    MatSelectModule,
    NgForOf,
    NgIf,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule {}

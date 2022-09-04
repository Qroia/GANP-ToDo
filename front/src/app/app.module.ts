import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DialogModule} from "./components/dialogComponent/dialog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodosModule} from "./components/todosComponent/todos.module";
import {Apollo} from "apollo-angular";
import {TodosComponent} from "./components/todosComponent/todos.component";
import {DataSharingService} from "./sharing/data-sharing.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DialogModule,
    TodosModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [Apollo, TodosComponent, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

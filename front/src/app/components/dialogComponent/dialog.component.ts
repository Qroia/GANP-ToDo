import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DialogService } from "./dialog.service";
import { DataSharingService } from "../../sharing/data-sharing.service";
import {plainToClass} from "class-transformer";
import {Categories} from "../../sharing/categories-class-transformer";

@Component({
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent implements OnInit {
  ExampleDialogReactiveForm: FormGroup;
  categories = ['Новая Категория'];

  constructor(
    private readonly dialogService: DialogService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    private dataSharingService: DataSharingService,
  ) {}

  ngOnInit() {
    const data = this.dataSharingService.categoriesData;
    for (let i = 0; i < data.length; i++) {
      this.categories.push(data[i].title);
    }
    this.initForm();
  }

  initForm() {
    this.ExampleDialogReactiveForm = this.fb.group({
      text: ['', [
        Validators.required,
        Validators.pattern(/[A-Za-zА-Яа-я1234567890]/)
      ]],
      categories: ['', [
        Validators.required
      ]],
      category: ['', [
        Validators.pattern(/[A-Za-zА-Яа-я1234567890]/)
      ]]
    })
  }

  trackByFn(index: any, item: any) {
    return index
  }

  isControlInvalid(controlText: string): boolean {
    const control = this.ExampleDialogReactiveForm.controls[controlText];
    return control.invalid && control.touched;
  }

  checkCategoryVariable(controlCategory: string): boolean {
    const control = this.ExampleDialogReactiveForm.controls[controlCategory];
    return control.value == 'Новая Категория';
  }

  onSubmit() {
    const controls = this.ExampleDialogReactiveForm.controls;

    if (this.ExampleDialogReactiveForm.invalid) {
      Object.keys(controls).forEach(controlText => controls[controlText].markAsTouched());
      return;
    }

    const formValues = this.ExampleDialogReactiveForm.value;

    const title = formValues.category == '' ? formValues.categories : formValues.category;

    this.dialogService.createTodo(formValues.text, title).subscribe(res => {
      const categoriesData = plainToClass(Categories, res);
      if (categoriesData.id) {
        // Edit local data
        if (formValues.category != '') {
          this.dataSharingService.categoriesData.push({
            id: categoriesData.id,
            title: title,
            todos: [{
              id: categoriesData.todos[0].id,
              text: formValues.text,
              isCompleted: false
            }]
          })
        } else {
          this.dataSharingService.categoriesData.map((item, i) => {
            if (item.id == categoriesData.id) {
              item.todos.push({
                id: categoriesData.todos[categoriesData.todos.length - 1].id,
                text: formValues.text,
                isCompleted: false
              })
            }
            return item;
          })
        }
      }
      //this.dataSharingService.categoriesData.next(this.dataSharingService.onRead());
      this.onCancel();
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

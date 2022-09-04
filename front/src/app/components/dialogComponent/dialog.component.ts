import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DialogService } from "./dialog.service";
import { DataSharingService } from "../../sharing/data-sharing.service";

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
    this.dataSharingService.categoriesData.subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.categories?.push(res[i].title);
      }
    });
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
      this.dataSharingService.categoriesData.next(this.dataSharingService.onRead());
      this.onCancel();
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

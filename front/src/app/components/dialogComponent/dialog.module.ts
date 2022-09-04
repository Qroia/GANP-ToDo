import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogComponent } from './dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCommonModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";

@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
    imports: [
        FormsModule,
        MatButtonModule,
        MatCommonModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        NgForOf,
        NgIf,
        AsyncPipe,
    ],
})
export class DialogModule {}

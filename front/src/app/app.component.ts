import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./components/dialogComponent/dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(res => {});
  }
}

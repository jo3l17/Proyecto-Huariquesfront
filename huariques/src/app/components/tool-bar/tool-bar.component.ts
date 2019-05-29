import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
    });
  }

}

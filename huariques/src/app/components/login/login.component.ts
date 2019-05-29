import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private _router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  main() {
    localStorage.setItem('login', 'login');
    this.dialogRef.close();
    this._router.navigateByUrl('main');
  }

  ngOnInit() {
  }

}

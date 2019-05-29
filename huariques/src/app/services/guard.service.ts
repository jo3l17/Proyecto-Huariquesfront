import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private _router: Router) { }

  canActivate() {
    let loged = localStorage.getItem('login');
    if (loged) {
      this._router.navigateByUrl('main');
    } else {
      return true;
    }
  }
}

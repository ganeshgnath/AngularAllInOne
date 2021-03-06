import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Injectable()
export class UserAuthGuard {

  constructor(
    private router: Router,
    private _authService:AuthService
  ) { 
  }
  canActivate(    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isLoggedIn()) {
      this.router.navigate(['login'], { queryParams: { 'redirectURL': state.url } });
      return false;
    } else {
      return true;
    }
  }

  public isLoggedIn(): boolean {
    let status = false;
    localStorage.getItem('user');
    const token =localStorage.getItem('user_token');
    if (token) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }

 

}

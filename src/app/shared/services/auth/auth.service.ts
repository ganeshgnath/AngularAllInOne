import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	host = environment.api.data_api;
	constructor(private http: HttpClient, private router: Router) {
		this.checkLoginStatus();
	}

	setToken(data: any) {
		localStorage.setItem('user', JSON.stringify(data.user_details[0]));
		localStorage.setItem('user_token', data.user_details[0].api_token);
		this.isLogged.next(true);
	}

  logOut():void {
		// localStorage.removeItem('user');
		// localStorage.removeItem('user_token');
		this.isLogged.next(false);
	}

	getLoginStatus() {
		return this.isLogged.asObservable();
	}

	private checkLoginStatus(): void {
    const token = localStorage.getItem('user_token');
		if (token) {
			this.isLogged.next(true);
		}
		this.isLogged.subscribe((flag) => {
      console.log(flag);
      
			if (!flag) {
				localStorage.removeItem('user');
				localStorage.removeItem('user_token');
				this.router.navigate(['login'], {});
			} else {
				this.router.navigate(['home'], {});
			}
		});
		
	}
}

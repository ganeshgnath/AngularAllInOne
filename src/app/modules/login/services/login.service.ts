import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	host = environment.api.data_api;
	constructor(private http: HttpClient,  private _authService :AuthService) {}

	loginMethod(params: any): any {
		let url = this.host + 'DemoAngularApi/login';
		return this.http.post(url, params).pipe(
			tap((res) => res),
			catchError(this.errorHandler)
		);
	}

	signUpMethod(params: any): any {
		let url = this.host + 'DemoAngularApi/signUp';
		return this.http.post(url, params).pipe(
			tap((res) => res),
			catchError(this.errorHandler)
		);
	}

	setUserCredentials(data:any):void {
		this._authService.setToken(data);
	}

	errorHandler(error: HttpErrorResponse) {
		return throwError(error.message || 'Service Error');
	}
}

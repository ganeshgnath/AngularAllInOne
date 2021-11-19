import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HomePageService {
	host = environment.api.demo_img;
	host_ci = environment.api.data_api;
	constructor(private http: HttpClient) {}

	getHomeSliderDetails():any {
		return this.http.get(this.host + 'json_data/angular_demo_site.json'+'?nocache='+new Date()).pipe(tap((res) => res));
	}
	getHomeAboutsite():any {
		// return this.http.post(this.host + 'DemoAngularApi/contents',params).pipe(tap((res) => res));
		let url = this.host_ci + 'DemoAngularApi/contents';
		const params = {
			"website":"all_angular",
			"slug":"home_abt"
		};
		return this.http.post(url, params).pipe(
			tap((res) => res),
			catchError(this.errorHandler)
		);
	}

	errorHandler(error: HttpErrorResponse) {
		return throwError(error.message || 'Service Error');
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class HomePageService {
	host = environment.api.demo_img;
	constructor(private http: HttpClient) {}

	getHomeSliderDetails():any {
		return this.http.get(this.host + 'json_data/angular_demo_site.json'+'?nocache='+new Date()).pipe(tap((res) => res));
	}
	getHomeAboutsite():any {
		return this.http.get(this.host + 'json_data/home_about_site.json'+'?nocache='+new Date()).pipe(tap((res) => res));
	}
}

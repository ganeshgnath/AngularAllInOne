import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../../services/home-page.service';
import { AboutSiteModel } from '../../../models/aboutsite.model';
@Component({
	selector: 'app-about-the-plan',
	templateUrl: './about-the-plan.component.html',
	styleUrls: ['./about-the-plan.component.scss'],
})
export class AboutThePlanComponent implements OnInit {
	allInOneAbout:any = [];
	panelOpenState =false;
	constructor(private _homePageService: HomePageService) {}
	ngOnInit(): void {
		this.fetchData();
	}
	private fetchData() {
		const promise = this._homePageService.getHomeAboutsite().toPromise();
		promise
			.then((data: any) => {
				this.allInOneAbout = data;
			})
			.catch((error: any) => {
				console.log('Promise rejected with ' + JSON.stringify(error));
			});
	}
}

import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../../services/home-page.service';
import { AboutSiteModel } from '../../../models/aboutsite.model';
@Component({
	selector: 'app-about-the-plan',
	templateUrl: './about-the-plan.component.html',
	styleUrls: ['./about-the-plan.component.scss'],
})
export class AboutThePlanComponent implements OnInit {
	allInOneAbout!: AboutSiteModel;

	constructor(private _homePageService: HomePageService) {}

	ngOnInit(): void {
		this._homePageService.getHomeAboutsite().subscribe((res: any) => {
			this.allInOneAbout = res;
		});
	}
}

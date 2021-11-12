import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../../services/home-page.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-home-slider',
	templateUrl: './home-slider.component.html',
	styleUrls: ['./home-slider.component.scss'],
	providers: [NgbCarouselConfig],
})
export class HomeSliderComponent implements OnInit {
	sliderDetaails = [];
	constructor(private _homePageService: HomePageService, private config: NgbCarouselConfig) {}

	ngOnInit() {
		this.config.interval = 3000;
		this.config.wrap = false;
		this.config.keyboard = false;
		this.config.pauseOnHover = false;
		this._homePageService.getHomeSliderDetails().subscribe((res: any) => {
			this.sliderDetaails = res.home_slider_img;
			res.home_slider_img.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
		});
	}
}

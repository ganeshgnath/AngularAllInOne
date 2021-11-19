import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/child-componets/home-slider/home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutThePlanComponent } from './components/child-componets/about-the-plan/about-the-plan.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
	imports: [CommonModule, HomeRoutingModule, NgbModule,MatExpansionModule],    
	declarations: [HomeComponent, HomeSliderComponent, AboutThePlanComponent],
})
export class HomeModule {}

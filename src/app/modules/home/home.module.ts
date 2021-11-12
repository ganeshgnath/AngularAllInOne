import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/child-componets/home-slider/home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [HomeComponent,HomeSliderComponent]
})
export class HomeModule { }

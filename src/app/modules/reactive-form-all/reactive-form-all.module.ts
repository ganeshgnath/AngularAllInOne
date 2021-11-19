import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormAllComponent } from './reactive-form-all.component';
import { ReactiveFormAllRoutingModule } from './reactive-form-all-routing.module';
import { AllMatModule } from 'src/app/shared/modules/all-mat-modules';
import { SampleSignUpComponent } from './components/sample-sign-up/sample-sign-up.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AllSamplesIncludedComponent } from './components/all-samples-included/all-samples-included.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DatePickersComponent } from './components/date-pickers/date-pickers.component';

@NgModule({
	imports: [CommonModule, ReactiveFormAllRoutingModule, AllMatModule, SharedModule,NgxIntlTelInputModule],
	declarations: [ReactiveFormAllComponent, SampleSignUpComponent, AllSamplesIncludedComponent, DatePickersComponent],
})
export class ReactiveFormAllModule {}

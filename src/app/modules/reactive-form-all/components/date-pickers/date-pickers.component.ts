import { Component, OnInit } from '@angular/core';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { ReactiveFormAllService } from '../../services/reactive-form-all.service';

@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.component.html',
  styleUrls: ['./date-pickers.component.scss']
})
export class DatePickersComponent implements OnInit {
	matcher = new ErrorStateInputMatcherDirective();
  startDate!:Date;
  endDate!: Date;  
  startDate1!:Date;
  endDate1!: Date;
  minDate =new Date();
  maxDate =new Date();
  constructor( private _reactiveFormAllService: ReactiveFormAllService) {}

  ngOnInit() {
  this.maxDate.setMonth(new Date().getMonth()+6);
  }

  signUpSubmit(): void {
		
	}

}

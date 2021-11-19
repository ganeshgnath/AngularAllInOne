import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { ReactiveFormAllService } from '../../services/reactive-form-all.service';

@Component({
  selector: 'app-sample-sign-up',
  templateUrl: './sample-sign-up.component.html',
  styleUrls: ['./sample-sign-up.component.scss']
})
export class SampleSignUpComponent implements OnInit {
  hide = true;
	chide = true;
  signUpFormGroup!: FormGroup;
	matcher = new ErrorStateInputMatcherDirective();
	constructor(private formBuilder: FormBuilder, private loginService: ReactiveFormAllService) {}

  ngOnInit() {
    this.signUpFormGroup = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			cpassword: ['', Validators.required],
			name: ['', Validators.required],
		});
  }

  signUpSubmit(): void {
		const params = {
			email: this.signUpFormGroup.controls.username.value,
			password: this.signUpFormGroup.controls.password.value,
			name: this.signUpFormGroup.controls.name.value,
		};
	}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	hide = true;
	chide = true;

  signUpFormGroup!: FormGroup;
	matcher = new ErrorStateInputMatcherDirective();
	constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

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
		this.loginService.signUpMethod(params).subscribe((res: any) => {
      if(res.status){
        this.loginService.setUserCredentials(res);
      }
		});
	}
}

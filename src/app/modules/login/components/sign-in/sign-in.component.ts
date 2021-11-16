import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
	loginFormGroup!: FormGroup;
	hide = true;
	matcher = new ErrorStateInputMatcherDirective();
	constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

	ngOnInit() {
		this.loginFormGroup = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	loginSubmit(): void {
		const params = {
			username: this.loginFormGroup.controls.username.value,
			password: this.loginFormGroup.controls.password.value,
		};
		this.loginService.loginMethod(params).subscribe((res: any) => {
			if (res.status) {
				this.loginService.setUserCredentials(res);
			}
		});
	}
}

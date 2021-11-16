import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateInputMatcherDirective } from 'src/app/shared/directives/error-state-input-matcher.directive';
import { LoginService } from '../services/login.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}

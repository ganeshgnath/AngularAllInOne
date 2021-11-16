import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	imports: [CommonModule, LoginRoutingModule, SharedModule, MatIconModule, MatTabsModule],
	declarations: [LoginComponent, SignUpComponent, SignInComponent],
})
export class LoginModule {}

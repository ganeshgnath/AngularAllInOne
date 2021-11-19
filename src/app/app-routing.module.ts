import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSuchPageComponent } from './shared/components/no-such-page/no-such-page.component';
import { UserAuthGuard } from './shared/guards/user-auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '',
		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'reactive-form-all',
		canActivate: [UserAuthGuard],
		loadChildren: () => import('./modules/reactive-form-all/reactive-form-all.module').then((m) => m.ReactiveFormAllModule),
	},
	{ path: '**', redirectTo: '404' },
	{ path: '404', component: NoSuchPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

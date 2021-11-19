import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormAllComponent } from './reactive-form-all.component';

const routes: Routes = [{ path: '', component: ReactiveFormAllComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormAllRoutingModule {}

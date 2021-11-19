import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { CommonMatModules } from './shared/modules/common-mat-modules';
import { SharedModule } from './shared/modules/shared.module';
import { UserAuthGuard } from './shared/guards/user-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CommonMatModules,
    SharedModule,
  ],
  providers: [UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

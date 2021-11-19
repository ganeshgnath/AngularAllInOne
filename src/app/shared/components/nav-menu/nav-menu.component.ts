import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Output() showHideNavMenu = new EventEmitter();
  loginIconFlag=false;

  constructor(  private _authService:AuthService) {}

  ngOnInit() {
    this._authService.isLogged.subscribe((flag) => {
      this.loginIconFlag =flag;
		});
  }
  logOut():void{
    this._authService.logOut();
  }
}

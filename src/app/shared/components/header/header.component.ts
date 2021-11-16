import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() showHideNavMenu = new EventEmitter();
  showMenu = false;
  loginIconFlag=false;
  constructor(  private _authService:AuthService) {}

  ngOnInit() {
    this._authService.isLogged.subscribe((flag) => {
			console.log(flag);
      this.loginIconFlag =flag;
		});
  }
  showHideMenu() {
    this.showMenu = !this.showMenu;
    this.showHideNavMenu.emit();
  }

  logOut():void{
    this._authService.logOut();
  }
}

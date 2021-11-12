import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  messages =[
    {
      "from":"aaaaa",
      "subject":"subject 111111",
      "content":"content 111111",
    }
  ]

  ngOnInit() {
  }

}

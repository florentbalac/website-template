import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Nordynamic';
  menuItems: MenuItem[];

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
      { name: "About us", route: "/about-us" },
      { name: "Page", route: "/page" },
      { name: "Contact", route: "/contact" }
    ];
  }

  ngOnInit() {
  }
  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];

}

export interface MenuItem {

  name: string;
  route: string;
}
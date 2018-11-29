import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { name: "Home", route: "" },
      { name: "Page", route: "/page" },
      { name: "Contact", route: "/contact" },
      { name: "About Us", route: "/about-us" },      
      { name: "Map", route: "/site/map" },
      { name: "Terms", route: "/site/terms" },
      { name: "Policy", route: "/site/policy" }
    ];
  }

  ngOnInit() {

  }

}
export interface MenuItem {

  name: string;
  route: string;
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
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

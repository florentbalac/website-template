import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from "./site-routing.module";
import { PolicyComponent } from "./policy/policy.component";
import { TermsComponent } from './terms/terms.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [
    TermsComponent, 
    MapComponent, 
    PolicyComponent
  ]
})
export class SiteModule { }

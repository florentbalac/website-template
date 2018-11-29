import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolicyComponent } from "./policy/policy.component";
import { TermsComponent } from './terms/terms.component';
import { MapComponent } from './map/map.component';

const siteRoutes: Routes = [
    { path: 'terms', component: TermsComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'map', component: MapComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(siteRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class SiteRoutingModule { }

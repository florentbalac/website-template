import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./ui/landing/landing.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { PageNotFoundComponent } from "./ui/page-not-found/page-not-found.component";
import { AboutUsComponent } from "./about-us/about-us.component";


const routes: Routes = [ 
  { path: '' , component: LandingComponent },  
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'site', loadChildren: './site/site.module#SiteModule'},
  { path: 'c', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'page', loadChildren: './projects/page/page.module#PageModule' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

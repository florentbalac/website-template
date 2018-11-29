import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // MaterializeModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LandingComponent, 
    ContactComponent, 
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ContactComponent,
    PageNotFoundComponent
  ]
})
export class UiModule { }

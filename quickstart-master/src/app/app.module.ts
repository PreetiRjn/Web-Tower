import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { LoginComponent }  from './login.component';
import { HomeComponent }  from './home.component';
import { LoginService }  from './login.service';

import { AppComponent }  from './app.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,routing,InMemoryWebApiModule.forRoot(InMemoryDataService), ],
  declarations: [ AppComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:[LoginService]
})
export class AppModule { }

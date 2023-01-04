import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

const routes:Route[]=[
  {path:'', redirectTo: "/home" , pathMatch:"full"},

  {path:'home', component : HomeComponent},
  {path:'maps', component : MapsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleMapsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

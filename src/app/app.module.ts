import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    ContactComponent,
    HomeComponent,
    AccommodationComponent,
    RegistrationComponent,
    EventsComponent,
    FaqsComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'accommodation',component:AccommodationComponent},
      {path:'registration',component:RegistrationComponent},
      {path:'events',component:EventsComponent},
      {path:'competition',component:CompetitionComponent},
      {path:'faqs',component:FaqsComponent},
      {path:'sponsors',component:SponsorsComponent},
      {path:'contact',component:ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

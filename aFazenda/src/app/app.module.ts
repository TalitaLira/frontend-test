import { HttpModule } from '@angular/http';
import { LogicService } from './services/logic.service';
import { PeopleService } from './services/people.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PeopleService,
    LogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

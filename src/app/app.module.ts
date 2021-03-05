import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { PinlistComponent } from './pinlist/pinlist.component';
import { SearchComponent } from './search/search.component';
import { AddpinComponent } from './addpin/addpin.component';
import { CheckHashComponent } from './check-hash/check-hash.component';

@NgModule({
  declarations: [
    AppComponent,
    PinlistComponent,
    SearchComponent,
    AddpinComponent,
    CheckHashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

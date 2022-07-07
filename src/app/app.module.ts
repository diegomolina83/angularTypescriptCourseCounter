import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './counter/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

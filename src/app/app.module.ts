import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroe/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './app/controller/controller.component';
import { PaisesComponent } from './app/controller/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

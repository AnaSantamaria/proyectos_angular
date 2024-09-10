import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BuscadorComponent } from './controller/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [

    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],// hay que poner esto entre  los corchetes para que no diga provider vacío
  bootstrap: [BuscadorComponent]
})
export class AppModule { }

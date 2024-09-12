import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './controller/alta/alta.component';
import { BuscadorComponent } from './controller/buscador/buscador.component';

const routes: Routes = [
  {
    path:"buscar",
    component:BuscadorComponent

  },
  {
    path:"nuevo",
    component:AltaComponent

  },
  {
    path:"buscarurl"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private buscadorService:BuscadorService){

  }

   tematica:string;
   //guardaremos los resultados de la búsqueda
   resultados:Resultado[];
   buscar():void{
    this.resultados=this.buscadorService.buscar(this.tematica);
   }
}

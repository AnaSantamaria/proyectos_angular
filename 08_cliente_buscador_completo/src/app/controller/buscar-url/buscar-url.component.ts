import { Resultado } from '../../model/Resultado';
import { BuscadorService } from './../../../../../06_client_buscador_rest/src/app/service/buscador.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-url',
  templateUrl: './buscar-url.component.html',
  styleUrl: './buscar-url.component.css'
})
export class BuscarUrlComponent {

  url:string;
  resultadoPorUrl:Resultado;

  constructor(private buscadorService:BuscadorService){

  }

  BuscarUrl():void{
    this.buscadorService.buscarurl(this.url)
  .subscribe(data=>this.resultadoPorUrl=data);
  }







}





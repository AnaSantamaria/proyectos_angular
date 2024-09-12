import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  constructor(private buscadorService:BuscadorService){

  }
resultado:Resultado= new Resultado;// new Resultado("","","") es inicializar la vaiable Resultado con sus tres parametros vacios

mensaje:String;
alta():void{
    console.log("llamando a alta en component")// traza
    this.buscadorService.alta(this.resultado)
      .subscribe(data=>{
        if (data){

          this.mensaje="Item grabado";
        }else{

          this.mensaje="Item No grabado";
        }

      });




  }

}

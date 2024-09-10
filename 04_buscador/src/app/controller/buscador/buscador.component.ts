import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  completo:Resultado[]=[
    new Resultado("http://www.fnac.es","libros","Libros y más"),
    new Resultado("http://www.mybook.com","libros","librería de temas varios"),
    new Resultado("http://www.game.es","juegos","Juegos variados"),
    new Resultado("http://www.music.es","música","Lamejor música"),
    new Resultado("http://www.tech.com","libros","Libros técnicos"),
    new Resultado("http://www.eljuego.es","juegos","Juegos on-line")
  ];

    //se volcara en esta variable
    tematica: string;
    //variable para almacenar el resultado de la busqueda
    resultados:Resultado[];

    //metodo
    buscar():void{// buscar es void y no del tipo Resultado ya que no envias nada al punto de llamada(botón click), si no que almacena la info en una variable
     /* for(let r of this.completo){

        if(r.tematica==this.tematica){

          this.resultados.push(r);
        }
      }*/

        this.resultados=this.completo.filter(r=>r.tematica == this.tematica);// === es que coincidan  valores

    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string;
  edad: number;
  texto:string;

  //codigo

  mostrar():void{

    this.texto="te lamas "+this.nombre+" y tienes "+this.edad+" años";// para acceder a las variables, siemppre this.
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { // export es como "public" en Java. Para que todos accedan al metodo
  title: String = 'hola humanos!!'; // es la variable que he creado en el interpolador en la pag de .html. El tipo de vatiable se indica de esa forma. NO ES NECESARIO declarar el tipo de variable

}

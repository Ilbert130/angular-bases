import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //El html al que esta vinculado
  standalone: false,
  //Si se usa de esta manera puedes agregar varios archivos de estilo
  styleUrls: ['./app.component.css'] //El style al que esta vinculado
})
export class AppComponent {
  public title:string = 'Hola Mundo';
}

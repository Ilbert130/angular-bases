import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <!-- Esta es la forma de invocar una funcion en un -->
  <!-- En un evento de un boton -->
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `,
  standalone: false
})
export class CounterComponent {

  public counter:number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  decreaseBy():void {
    this.counter -= 1;
  }

  reset():void {
    this.counter = 10
  }
}



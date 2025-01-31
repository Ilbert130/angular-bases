import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  //Exponiendo el counterComponent para que se pueda consumir fuera de su ambito.
  exports: [CounterComponent],
  //En el declaration se indica los componente que agrupara
  declarations: [CounterComponent],
  providers: [],
})
export class CounterModule { }

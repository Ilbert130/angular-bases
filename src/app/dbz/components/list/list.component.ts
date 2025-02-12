import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id:'1',
      name:'Trunk',
      power: 10
    }
  ]

  @Output()
  onDeleteId:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void {
    //Todo:emitir el id del personaje
    // debugger;
    this.onDeleteId.emit(id);
    // console.log(index);
  }

}

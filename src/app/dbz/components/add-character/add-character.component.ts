import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter() {

    // debugger;

    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    // console.log(this.character)
    // this.character.name = '';
    // this.character.power = 0;
  }
}

import { Component } from '@angular/core';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}
  private name: string = 'Said';

  getName() {
    return this.name;
  }

  items: TodoItem[] = [
    // { description: 'Einkaufen', action: 'no' },
    // { description: 'Kochen', action: 'yes' },
    // { description: 'Sport ', action: 'no ' },

   /*  new TodoItem('Einkaufen', 'no'),
    new TodoItem('Kochen', 'yes'),
    new TodoItem('Sport', 'no'), */


     { description: 'Einkaufen', action: 'no' },
    { description: 'Kochen', action: 'yes' },
    { description: 'Sport ', action: 'no ' },



  ];
}

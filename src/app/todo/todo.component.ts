import { Component } from '@angular/core';

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
  items: any[] = [
    { description: 'Einkaufen', action: 'no' },
    { description: 'Kochen', action: 'yes' },
    { description: 'Sport ', action: 'no ' },
  ];
}

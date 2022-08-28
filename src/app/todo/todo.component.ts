import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  /*   constructor() {} */

  displayAll: boolean = false;

  model = new Model();

  addItem(value: string) {
    if (value !== '') {
      this.model.items.push({ description: value, action: false });
    } else {
      alert('Bitte einen Text eingeben');
    }
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter((item) => item.action === false);
    }
  }
}

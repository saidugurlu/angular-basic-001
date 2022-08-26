import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  /*   constructor() {} */

  model = new Model();

  addItem(value: string) {
    this.model.items.push({ description: value, action: 'no' });
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}

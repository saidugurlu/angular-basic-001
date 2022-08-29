import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  displayAll: boolean = false;
  inputText: string = '';

  model = new Model();

  addItem() {
    if (this.inputText !== '') {
      let data = { description: this.inputText, action: false }
      this.model.items.push(data);
      this.inputText = '';

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

  getBtnClass() {
    return {
      disabled: this.inputText.length === 0,
      'btn-secondary': this.inputText.length === 0,
      'btn-primary': this.inputText.length > 0,
    };
  }
}

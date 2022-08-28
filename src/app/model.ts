import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Said';
    this.items = [
      { description: 'Einkaufen', action: false },
      { description: 'Kochen', action: true },
      { description: 'Sport ', action: false },
    ];
  }
}

import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Said';
    this.items = [
      { description: 'Einkaufen', action: 'no' },
      { description: 'Kochen', action: 'yes' },
      { description: 'Sport ', action: 'no ' },
    ];
  }
}

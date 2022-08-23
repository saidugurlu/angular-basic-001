import { Component } from '@angular/core';

@Component({
  selector: 'app',
   templateUrl: './app.component.html',
/*   template: `

  <h1>test angular basic</h1>
  <h2>{{ title }}</h2>
  <h2>{{ getTitle() }}</h2>
  <p>{{ todoItems.description }}</p>
  <p>{{ todoItems.done }}</p>

    `, */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App'; // Burada tanimladigimiz title componentini app.component.html dosyasinda gosteriyoruz.
  /*   private title = "Todo App"; */

  getTitle() {
    return this.title;
  }

  todoItems = {
    description: 'breakfast',
    done: false,
  };
}

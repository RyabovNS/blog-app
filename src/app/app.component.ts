import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'blog-app';

  public onClick(): void {
    const a = 10;

    const name = 'test';
  }
}

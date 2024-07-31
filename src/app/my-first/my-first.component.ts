import { Component } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss',
})
export class MyFirstComponent {
  user: User = {
    surname: 'Tuncer',
    age: 18,
    name: 'Batuhan',
  };
}

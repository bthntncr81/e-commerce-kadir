import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'e-commerce-project';
  user: User = {
    surname: 'Baş',
    age: 18,
    name: 'Kadir',
  };

  changeName() {
    this.user.name = 'batuhan';
  }
}

export class User {
  name: string;
  surname?: string;
  age?: number;
}

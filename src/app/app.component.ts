import { Component, OnInit } from "@angular/core";
import { BasketService } from "./basket.service";
import { KadirProductService } from "./kadir-product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(
    private basketService: BasketService,
    private prodService: KadirProductService
  ) {}
  ngOnInit(): void {
    this.basketService.calculateTotal();
    this.prodService.setCartList();
  }
  title = "e-commerce-project";
  user: User = {
    surname: "Baş",
    age: 18,
    name: "Kadir",
  };

  changeName() {
    this.user.name = "batuhan";
  }
}

export class User {
  name: string;
  surname?: string;
  age?: number;
}

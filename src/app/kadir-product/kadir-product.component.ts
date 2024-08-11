import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { BasketService } from "../basket.service";
import { KadirProductService } from "../kadir-product.service";
import { BasketModel, ProductModel } from "../product.model";

@Component({
  selector: "app-kadir-product",
  templateUrl: "./kadir-product.component.html",
  styleUrl: "./kadir-product.component.scss",
})
export class KadirProductComponent implements OnInit {
  @Input() product: ProductModel;

  basketProduct: BasketModel;

  constructor(
    private prodService: KadirProductService,
    private messageService: MessageService,
    public basketService: BasketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.basketProduct = {
      Name: this.product.Name,
      Price: this.product.Price,
      Count: 1,
      Id: this.product.Id,
      Image: this.product.Images[0],
    };
  }

  addBasket() {
    this.basketService.addBasket(this.basketProduct);
  }
}

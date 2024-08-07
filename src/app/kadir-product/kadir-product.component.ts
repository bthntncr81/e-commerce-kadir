import { Component, Input, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
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
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.basketProduct = {
      Name: this.product.Name,
      Price: this.product.Price,
      Count: 1,
      Id: this.product.Id,
      Image: this.product.Image,
    };
  }

  addBasket() {
    if (localStorage.getItem("basket")) {
      var basket = JSON.parse(localStorage.getItem("basket")!) as BasketModel[];

      let index = (
        JSON.parse(localStorage.getItem("basket")!) as BasketModel[]
      ).findIndex((x) => x.Id == this.basketProduct.Id);

      if (index != -1) {
        basket[index].Count++;
      } else {
        basket.push(this.basketProduct);
      }
      localStorage.setItem("basket", JSON.stringify(basket));
      this.prodService.setCartList();
      this.messageService.add({
        severity: "success",
        summary: "Ürün Başarıyla Eklendi",
        detail: "Muazzam",
      });
    } else {
      let basketArray: BasketModel[] = [];
      basketArray.push(this.basketProduct);
      localStorage.setItem("basket", JSON.stringify(basketArray));
      this.prodService.setCartList();

      this.messageService.add({
        severity: "success",
        summary: "Ürün Başarıyla Eklendi",
        detail: "Muazzam",
      });
    }
  }
}

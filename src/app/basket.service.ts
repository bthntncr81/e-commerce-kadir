import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { KadirProductService } from "./kadir-product.service";
import { BasketModel } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class BasketService {
  constructor(
    private prodService: KadirProductService,
    private messageService: MessageService
  ) {}

  addBasket(basketProduct: BasketModel) {
    if (localStorage.getItem("basket")) {
      var basket = JSON.parse(localStorage.getItem("basket")!) as BasketModel[];

      let index = (
        JSON.parse(localStorage.getItem("basket")!) as BasketModel[]
      ).findIndex((x) => x.Id == basketProduct.Id);

      if (index != -1) {
        basket[index].Count++;
      } else {
        basket.push(basketProduct);
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
      basketArray.push(basketProduct);
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

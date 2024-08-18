import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject } from "rxjs";
import { KadirProductService } from "./kadir-product.service";
import { BasketModel } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class BasketService {
  private total$ = new BehaviorSubject<number>(0);
  totalPrice$ = this.total$.asObservable();

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

  calculateTotal() {
    this.prodService.basketNew$.subscribe((res) => {
      var total = 0;
      res.forEach((element) => {
        total += element.Price * element.Count;
      });
      this.total$.next(total);
    });
  }
}

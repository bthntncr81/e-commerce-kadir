import { Component, OnInit } from "@angular/core";
import { BasketService } from "../basket.service";
import { KadirProductService } from "../kadir-product.service";
import { BasketModel } from "../product.model";

@Component({
  selector: "app-basket-sidebar",
  templateUrl: "./basket-sidebar.component.html",
  styleUrl: "./basket-sidebar.component.scss",
})
export class BasketSidebarComponent implements OnInit {
  basket: BasketModel[];
  sideBarVisible: boolean = false;
  isDelete: boolean = false;
  deleteIndex = 0;
  constructor(
    private prodService: KadirProductService,
    public basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.prodService.basketNew$.subscribe({
      next: (res) => {
        this.basket = JSON.parse(
          localStorage.getItem("basket")!
        ) as BasketModel[];
      },
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  minusPlus(id: number, isMinus: boolean) {
    var index = this.basket.findIndex((x) => x.Id == id);

    if (isMinus) {
      if (this.basket[index].Count == 1) {
        this.deleteIndex = index;
        this.isDelete = true;
      } else {
        this.basket[index].Count--;
      }
    } else {
      this.basket[index].Count++;
    }
    localStorage.setItem("basket", JSON.stringify(this.basket));

    this.prodService.setCartList();
  }

  deleteBasketItem() {
    this.basket.splice(this.deleteIndex, 1);
    this.isDelete = false;
    localStorage.setItem("basket", JSON.stringify(this.basket));
    this.prodService.setCartList();
  }
}

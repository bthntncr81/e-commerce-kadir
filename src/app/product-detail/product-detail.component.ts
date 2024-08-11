import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { BasketService } from "../basket.service";
import { KadirProductService } from "../kadir-product.service";
import { BasketModel, ProductModel } from "../product.model";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
})
export class ProductDetailComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='pi pi-arrow-left'></i>",
      "<i class='pi pi-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  product: ProductModel;
  basketProduct: BasketModel;
  constructor(
    private service: KadirProductService,
    private activatedRoute: ActivatedRoute,
    private basketService: BasketService
  ) {}
  ngOnInit(): void {
    console.log();
    this.service.getProducts().subscribe((res) => {
      this.product = res.find(
        (x) => x.Id == this.activatedRoute.snapshot.params["id"]
      )!;

      this.basketProduct = {
        Name: this.product.Name,
        Price: this.product.Price,
        Count: 1,
        Id: this.product.Id,
        Image: this.product.Images[0],
      };
    });
  }

  addBasket() {
    this.basketService.addBasket(this.basketProduct);
  }
}

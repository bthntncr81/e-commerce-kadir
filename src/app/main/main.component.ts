import { Component } from "@angular/core";
import { KadirProductService } from "../kadir-product.service";
import { ProductModel } from "../product.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent {
  items: ProductModel[] = [];
  constructor(private service: KadirProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      this.items = res;
    });
  }
}

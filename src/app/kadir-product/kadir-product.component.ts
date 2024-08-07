import { Component, Input, OnInit } from "@angular/core";
import { ProductModel } from "../product.model";

@Component({
  selector: "app-kadir-product",
  templateUrl: "./kadir-product.component.html",
  styleUrl: "./kadir-product.component.scss",
})
export class KadirProductComponent implements OnInit {
  @Input() product: ProductModel;

  ngOnInit(): void {
    console.log(this.product);
  }
}

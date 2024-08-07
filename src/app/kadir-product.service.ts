import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ProductModel } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class KadirProductService {
  private basket$ = new BehaviorSubject<boolean>(true);
  basketNew$ = this.basket$.asObservable();

  constructor(private httpClient: HttpClient) {}

  setCartList() {
    this.basket$.next(true);
  }
  getProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>("assets/products-1.json");
  }
}

export class Observe<T> {
  model: T;
  name: string;
  address: string;
}

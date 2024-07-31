import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class KadirProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>('assets/products-1.json');
  }
}

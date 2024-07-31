import { Component } from '@angular/core';
import { KadirProductService } from '../kadir-product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  items: number;
  constructor(private service: KadirProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      console.log(res);
    });


  }
}

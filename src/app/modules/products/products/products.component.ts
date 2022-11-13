import { Component, OnInit } from '@angular/core';
import {
  GetAllProductsRes,
  ProductDTO,
  ProductsService,
} from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly _productsService: ProductsService) {}

  public products: ProductDTO[] = [];

  ngOnInit(): void {
    this._productsService
      .getAllProducts()
      .subscribe((res: GetAllProductsRes) => {
        if (res.success) {
          this.products = res.result;
        }
      });
  }
}

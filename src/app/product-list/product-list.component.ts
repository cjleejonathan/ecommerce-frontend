import { Component, OnInit } from '@angular/core';
import { Member } from '../common/member';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  member: Member;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.productService.getProductList()
      .subscribe((data: GetResponseProducts) => {
        this.products = data._embedded.products;
      });

  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },

}

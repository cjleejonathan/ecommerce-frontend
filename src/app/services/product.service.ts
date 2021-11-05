import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductUrl = environment.springApiUrl + '/api/products';
  private postProductUrl = environment.springApiUrl + '/products/save';

  constructor(private httpClient: HttpClient) { }

  getProductList() {
    return this.httpClient.get<GetResponseProducts>(this.getProductUrl);
  }

  saveProduct(product: Product) {
    return this.httpClient.post<Product>(this.postProductUrl, product);
  }


}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}






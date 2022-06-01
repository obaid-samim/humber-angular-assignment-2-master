import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Order } from '../models/Order';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductList: Product[] = [];
  copyProductList: Product[] = [];
  cartItems: Product[] = [];
  getOrderData: any;
  constructor(private httpClient: HttpClient) { }
    // here to call and retrieve list of products 
  getProducts(): Observable<Product[]> {
    return this.httpClient
    .get<Product[]>('../../assets/product-data.json')
    .pipe(
      map(
        (products) =>
          (this.ProductList = this.copyProductList = products)
      )
    );
  };
    // here to call and retrieve list of orders 
  getOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('../../assets/order-data.json');
  }
  clearCart() {
    this.cartItems = [];
  }
addItemsToCart(item: Product) {
//If we include the this cartItems here
  this.cartItems = [...this.cartItems, item];
}
filterProducts(name: string) {
  if (name) {
    this.ProductList = this.copyProductList.filter((listItem) =>
      listItem.name.includes(name)
    );
  } else {
    this.ProductList = this.copyProductList;
  }
}
}
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderItems: Order[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getOrderData().subscribe((orders: Order[]) => {
      this.orderItems = orders;
    }); 
  }
}

import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[] = [
    { id: 1, title: 'Laptop', stock: 10, category: 'Electronics', price: 1200 ,image:"../../../assets/images/laptop.jpg"},
    { id: 2, title: 'T-shirt', stock: 25, category: 'Clothing', price: 20 ,image:"../../../assets/images/tshirt.jpg"},
    { id: 3, title: 'Book: Java Basics', stock: 50, category: 'Books', price: 15 ,image:"../../../assets/images/book.jpg"},
  ];

  

}

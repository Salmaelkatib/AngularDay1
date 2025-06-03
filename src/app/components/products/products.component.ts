import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    category: string = 'all';
    productTitle: string = '';
    maxPrice: string ='';
    
    products: Product[] = [
      { id: 1, title: 'Laptop', stock: 10, category: 'Electronics', price: 1200 ,image:"../../../assets/images/laptop.jpg"},
      { id: 2, title: 'T-shirt', stock: 25, category: 'Clothing', price: 20 ,image:"../../../assets/images/tshirt.jpg"},
      { id: 3, title: 'Book: Java Basics', stock: 50, category: 'Books', price: 15 ,image:"../../../assets/images/book.jpg"},
    ];

    updateFilters(category: string, title: string, price: string): void {
    this.category = category;
    this.productTitle = title;
    this.maxPrice = price;
  }

}

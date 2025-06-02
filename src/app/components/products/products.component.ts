import { Component } from '@angular/core';

interface ActiveFilter {
  name: string;
  value: string | number;
}

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
    totalProducts: number = 8;

    updateFilters(category: string, title: string, price: string): void {
    this.category = category;
    this.productTitle = title;
    this.maxPrice = price;
  }

}

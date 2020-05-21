import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  products: Product[]=[
    new Product(1, 'Product 1', 'This is the product 1', 20),
    new Product(2, 'Product 2', 'This is the product 2', 100),
    new Product(3, 'Product 3', 'This is the product 3', 500),
    new Product(4, 'Product 4', 'This is the product 4', 1000)
  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}

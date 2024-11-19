import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Iproducts[] = [
  { id:1, name: 'Nike Air Max 90', price: 50.0, description: 'The insole are confortable so you can', img: "./NikeAir90.png" },
  { id:2, name: 'Nike Air Force 270', price: 50.0, description: 'The insole are confortable so you can', img: "./NikeAir270.png"  },
  { id:3, name: 'Nike Air Force', price: 40.0, description: 'The insole are confortable so you can', img: "./AirForce.png" },
];
getProducts(): Iproducts[]{
  return this.products;
}
}

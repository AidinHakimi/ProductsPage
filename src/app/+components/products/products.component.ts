import { Component } from '@angular/core';
import { Product } from '../../+models/Product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

  //The following array functions as our database
  products: Product[] = [
    {
      pic: "string",
      title: "Lenovo Legion 7",
      stock: 6,
      price: 1900,
      details: "Core i9 13900H, RTX 4060",
    },
    {
      pic: "string",
      title: "Apple MacBook Air M3",
      stock: 3,
      price: 1500,
      details: "512GB, RAM:16GB",
    },
    {
      pic: "string",
      title: "Asus Zephyrus G15",
      stock: 2,
      price: 1800,
      details: "Ryzen 7 6800H, RTX 4060",
    },
    {
      pic: "string",
      title: "Hp Victus 15",
      stock: 1,
      price: 1000,
      details: "Core i5 13400, RTX 3050",
    },
    {
      pic: "string",
      title: "Hp Victus 15",
      stock: 1,
      price: 1000,
      details: "Core i5 13400, RTX 3050",
    },
  ]
}

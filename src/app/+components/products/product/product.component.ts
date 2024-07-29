import { Component, Input } from '@angular/core';
import { Product } from '../../../+models/Product';

@Component({
  selector: 'product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  //Question: How to remove the inputs? For clean code purposes
  @Input() product: Product = {
    pic: "",
    title: "",
    stock: 2,
    price: 1400,
    details: ""
  }

  // This function is utilized to show a console message, when clicked upon one of the products
  clicked() {
    console.log("Test: Successfully clicked on of the products!");
  }
}

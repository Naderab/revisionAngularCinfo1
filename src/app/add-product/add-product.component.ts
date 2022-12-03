import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  }

  add(){
    this._productService.addProduct(this.product).subscribe(()=>alert('Product Succefully added'))
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsList:Product[]=[]
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((data)=>this.productsList=data)
  }

  addToCart(product: Product){
   // this._productService.addToCart(product).subscribe(()=>{},(error)=>{console.log(error);error.error.includes('duplicate')&&alert('Product already exist')})
    this._productService.addToCart(product).subscribe(()=>{},()=>alert('Product already exist'))

  }

}

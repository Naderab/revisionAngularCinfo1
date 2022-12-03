import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  product:Product=new Product();
  constructor(private _activatedRoute:ActivatedRoute,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProductById(this._activatedRoute.snapshot.params['id']).subscribe((data)=>this.product=data)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = environment.apiUrl+"products"
  urlCart:string = environment.apiUrl+"cart"

  constructor(private http:HttpClient) { }

  addProduct(product:Product){
    return this.http.post(this.url,product);
  }
  addToCart(product:Product){
    return this.http.post(this.urlCart,product);
  }

  getProducts(){
    return this.http.get<Product[]>(this.url)
  }

  getProductById(id:number){
    return this.http.get<Product>(this.url+"/"+id)
  }
}

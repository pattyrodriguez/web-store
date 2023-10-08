import { Injectable } from '@angular/core';
import { Product } from '../models/produtc.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  total: number = 0;
  constructor() { }

  AddProductToCart(product: Product){
    this.myShoppingCart.push(product);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}

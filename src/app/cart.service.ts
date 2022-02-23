import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';


@Injectable({
  providedIn: 'root'
})
export class CartService {
dishes: IDishes[] = [];
  constructor() { }

  addToCart(dish:IDishes){
    this.dishes.push(dish);
  }
  getDishes(){
     
    return this.dishes;
  }
  
  clearCart(){
    this.dishes = [];
    return this.dishes;
  }
}

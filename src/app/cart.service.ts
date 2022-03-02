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

//   remove(id: number): number{
//   let dishesItems =this.dishes;
//   let dishItem = dishesItems[id];
//   dishItem.quantity--;
//   return dishItem.quantity;
// }
// add(id: number): number{
//   let dishesItems =this.dishes;
//   let dishItem = dishesItems[id];
//   dishItem.quantity++;
//   return dishItem.quantity;
// }
  getDishes(){
     
    return this.dishes;
  }
  
  clearCart(){
    this.dishes = [];
    return this.dishes;
  }
}

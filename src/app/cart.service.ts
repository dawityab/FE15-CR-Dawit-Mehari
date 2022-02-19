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
  sum : any = 0;
  amount: any = 0;
  total(){
   
    for(let val of this.dishes)
        this.sum = this.sum + val.price;
        this.amount = (10/100) * this.sum;
        console.log(this.amount);
        return this.sum + this.amount;
    
  }
  discount(){
   this.amount= this.total() * 0.15;
    return this.total() - this.amount;
  }
 
  
  clearCart(){
    this.dishes = [];
    return this.dishes;
  }
}

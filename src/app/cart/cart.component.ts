import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { IDishes } from '../IDishes';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
dishes: IDishes[]=[];
checkoutForm = new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(4)]),
  address: new FormControl('',Validators.required)

})
  constructor(private cartService: CartService) { }
  singleDishPrice(){
   let total: number = 0;
    for(let dish of this.dishes){
     total += dish.price;
        }
        return total;
        
    
  }
  service(): number{
    return  (10/100) * this.singleDishPrice();  
   
   
}
  discount(): number{
  let total: number = this.singleDishPrice() + this.service();
  let discount: number = 0;
   if(total >= 40){
  discount = total  * 0.15;
   }
   return discount;
  
  
   
  }
  total(): number{
    return ((this.singleDishPrice() + this.service())- this.discount())
  }


 

successInfo: string= "Your order has been submitted";
rejectInfo: string= "Invalid user information. Please check again";


onSubmit(){

  if(this.checkoutForm.valid){
    this.checkoutForm.value;
  
 
    (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
    (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
    this.dishes = this.cartService.clearCart();
   
    this.checkoutForm.reset();
  }
  else{
    (document.getElementById("success-Info")as HTMLElement).innerHTML = this.rejectInfo;
    (document.getElementById("success-Info")as HTMLElement).classList.add("alert-danger");
    
  }
    
    }
    
  ngOnInit(): void {
    this.dishes = this.cartService.getDishes();
   
    
    
     
  }

}


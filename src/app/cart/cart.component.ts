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
 
successInfo: string= "Your order has been submitted";
rejectInfo: string= "Invalid user information. Please check again";


onClick()
{

(document.getElementById("total1")as HTMLElement).innerHTML = `Total cost - ${this.cartService.total().toFixed(2)} €`;
(document.getElementById("total1")as HTMLElement).classList.add("btn-warning");
}

  onSubmit(){
    if(this.checkoutForm.valid){
      this.checkoutForm.value;
    
     (document.getElementById("total")as HTMLElement).innerHTML = `Total cost with 10% Service - ${this.cartService.total().toFixed(2)} €`;
      (document.getElementById("total")as HTMLElement).classList.add("alert-warning");
      (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
      (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
      this.dishes = this.cartService.clearCart();
     
      this.checkoutForm.reset();
    }
    else{
      (document.getElementById("success-Info")as HTMLElement).innerHTML = this.rejectInfo;
      (document.getElementById("success-Info")as HTMLElement).classList.add("alert-danger");
      
    }
    if(this.cartService.total() >= 40){
      (document.getElementById("discount-total")as HTMLElement).innerHTML = `Total cost with 15% discount - ${this.cartService.discount().toFixed(2)} €`;
      (document.getElementById("discount-total")as HTMLElement).classList.add("alert-warning");
      (document.getElementById("total")as HTMLElement).innerHTML = `Total cost with 10% Service - ${this.cartService.total().toFixed(2)} €`;
      (document.getElementById("total")as HTMLElement).classList.add("alert-warning");
    
    }
   
   
  }

  ngOnInit(): void {
    this.dishes = this.cartService.getDishes();
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
dishes : IDishes [] = dishes;




  constructor(

private cartService: CartService,

  ) { }
  successInfo: string = "Your order has been added to the cart!";
  addToCart(id: number)
      {
        this.cartService.addToCart(this.dishes[id]);
        (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
        (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");

      
      } 
  ngOnInit(): void {
   
  }

}

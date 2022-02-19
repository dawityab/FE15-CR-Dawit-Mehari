import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: IDishes = {} as IDishes;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
      ) { }
      successInfo: string = "Your order has been added to the cart!";
      addToCart()
          {
            this.cartService.addToCart(this.dish);
            (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
            (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
          
          } 
      ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
          this.id = +params['dishId'];
          this.dish = dishes[this.id];
    
        })
      }

}

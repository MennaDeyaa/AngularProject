import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  productss:Iproduct[]=[];
  CartProducts:Iproduct[]=[];
   
   constructor(private cartservice:CartService){}
  ngOnInit(): void {
    this.CartProducts=this.cartservice.getcartelemt();
  }REMOVEfromcart(product:Iproduct){
    this.cartservice.removefromcart(product);
  }
   

  
  totalprice():number{
    return this.CartProducts.reduce((total,product)=>total + (product.price*product.quantity),0)
  }
}

import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productss:Iproduct[]=[];
  CartProducts:Iproduct[]=[];

  constructor() { }

  getcartelemt(){
    return this.CartProducts;
  }

  AddingToCart(PRODUCT:Iproduct){
    const realproducts=this.CartProducts.find(pro=>pro.id ===PRODUCT.id);
    if(realproducts){
      realproducts.quantity+=1
    }else{this.CartProducts.push({...PRODUCT,quantity:1});}
    // this.CartProducts.push(PRODUCT)
  }

 removefromcart(product:Iproduct){
  const index=this.CartProducts.indexOf(product);
  if(index !== -1){
    product.quantity -=1;
    const realproducts=this.productss.find(pro=>pro.id===product.id);
    if(realproducts){
      realproducts.quantity +=1;
    }
  }else{
    product.quantity===0;
  }
  // this.CartProducts.filter((cartitem)=>cartitem.id !=id)
}
}

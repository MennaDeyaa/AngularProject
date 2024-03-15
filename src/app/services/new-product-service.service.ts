import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import productlist from '../../assets/productlist';

@Injectable({
  providedIn: 'root'
})
export class NewProductServiceService {
private products:Iproduct[]=productlist
  constructor() { }

  getAllProducts():Iproduct[]{
    return this.products;
  }
  getProductbyCategoryID(catId:number){
    return this.products.filter((product)=>product.categoryID===catId);
  }
  getProductbyID(productID:number|undefined):Iproduct |undefined{
    if(!productID) return undefined;
   const pro = this.products.find((pro)=>pro.id===productID);
   if(pro) return pro;
   return;
  }
  deleteProduct(product:Iproduct){
    const index=this.products.findIndex((item)=>item.id===product.id);
    if(index !==-1){
      this.products.splice(index,1);
    }
  }handleNextButton(existingId:number):number{
    let index=this.products.findIndex((pro)=>pro.id===existingId);
    const findproduct=this.products[index+1]
    return findproduct.id;
  }isLastIndex(id:number|undefined):boolean{
    if(!id)return false;
    const lastproduct=this.products[this.products.length-1];
    return lastproduct.id==id;
  }isFirstIndex(id:number|undefined):boolean{
    if(!id)return false;
    const fisrtproduct=this.products[0];
    return fisrtproduct.id==id;
  }handleBackButton(existingId:number):number{
    let index=this.products.findIndex((pro)=>pro.id===existingId);
    const findproduct=this.products[index-1]
    return findproduct.id;
  }
  FilterProductForSearch(searchText:string):Iproduct[]{
    if(searchText){return this.products.filter((product)=>product.name.includes(searchText));}
    else{return this.products;}
  }
}

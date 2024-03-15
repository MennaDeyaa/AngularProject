import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { ExchangeRatePipe } from '../../pipes/exchange-rate.pipe';
import { Iproduct } from '../../models/iproduct';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-single-new-component',
  standalone: true,
  imports: [HighlightDirective,NgStyle,CurrencyPipe,DatePipe,ExchangeRatePipe],
  templateUrl: './single-new-component.component.html',
  styleUrl: './single-new-component.component.css'
})
export class SingleNewComponentComponent {
  buyFun(product:Iproduct){if(product.quantity)product.quantity--}
  ismorethanzero:boolean=true;

 @Input() product!:Iproduct;//send data from parent(new-product) to child(single-new-produt)//gayy mn l parent//hyd5ol hena//input decrator
 @Output() handleAddToCart=new EventEmitter<Iproduct>();//send data from child to parent //ray7 ll parent //hytl3 mn hena
 
 addToCart(p:Iproduct){
  // event.stopPropagation();//mtkhlesh l event ysht8al bltarteb event:MouseEvent,
  this.cartservices.AddingToCart(p);
  // this.handleAddToCart.emit(p);
 }
constructor(private router:Router,private cartservices:CartService){
}
handleroute(id:number){
  this.router.navigate(['/product',id]);
}
}

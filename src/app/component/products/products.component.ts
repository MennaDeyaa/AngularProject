import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ClientName:string="menna deyaa"
  PicShow:boolean=false;
  FnToggle(){
    this.PicShow=!this.PicShow;
  }

}

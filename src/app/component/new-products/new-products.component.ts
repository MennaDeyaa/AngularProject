import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ExchangeRatePipe } from '../../pipes/exchange-rate.pipe';
import { SingleNewComponentComponent } from '../single-new-component/single-new-component.component';
import { NewProductServiceService } from '../../services/new-product-service.service';
import { FormsModule } from '@angular/forms';
import { HttpproductService } from '../../services/httpproduct.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [
    HighlightDirective,
    CommonModule,
    CurrencyPipe,
    DatePipe,
    ExchangeRatePipe,
    SingleNewComponentComponent,
    FormsModule,
  ],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css',
})
export class NewProductsComponent implements OnInit, OnDestroy {
  productss: Iproduct[] = [];
  CartProducts: Iproduct[] = [];
  searchvalue: string = '';
  subscribers: Subscription[] = [];

  constructor(
    private newproductservice: NewProductServiceService,
    private httpproduct: HttpproductService
  ) {
    //this.productss = this.newproductservice.getAllProducts(); //3shan bs ageb l products l rabtha bl service
  }

  ngOnInit(): void {
    this.subscribers.push(
      this.httpproduct.GetAll().subscribe((products) => {
        this.productss = products;
      })
    );
  }

  // ngOnChanges(): void {
  //   this.productss=this.newproductservice.FilterProductForSearch(this.searchvalue);
  // }
  HandleDropDown(n: number) {
    this.productss = this.newproductservice.getAllProducts();
    if (n == 1) {
      this.productss = this.productss.filter(
        (product) => product.categoryID == 1
      );
    } else if (n == 2) {
      this.productss = this.productss.filter(
        (product) => product.categoryID == 2
      );
    } else if (n == 3) {
      this.productss = this.productss.filter(
        (product) => product.categoryID == 3
      );
    }
  }
  AddingToCart(PRODUCT: Iproduct) {
    const realproducts = this.CartProducts.find((pro) => pro.id === PRODUCT.id);
    if (realproducts) {
      realproducts.quantity += 1;
    } else {
      this.CartProducts.push({ ...PRODUCT, quantity: 1 });
    }
  }
  getfilteredproduct(): Iproduct[] {
    if (this.searchvalue != null) {
      return this.productss.filter((pro) =>
        pro.name.toLowerCase().includes(this.searchvalue.toLowerCase())
      );
    } else {
      return this.searchvalue;
    }
  }
  ngOnDestroy(): void {
    this.subscribers.forEach((element) => {
      element.unsubscribe();
    });
  }
}

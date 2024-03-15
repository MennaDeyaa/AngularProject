import { Component, OnInit } from '@angular/core';
import { NewProductServiceService } from '../../services/new-product-service.service';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ExchangeRatePipe } from '../../pipes/exchange-rate.pipe';

@Component({
  selector: 'app-newproduct-details',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,ExchangeRatePipe],
  templateUrl: './newproduct-details.component.html',
  styleUrl: './newproduct-details.component.css'
})
export class NewproductDetailsComponent implements OnInit{
  product!:Iproduct|undefined
  islastindex:boolean=false;
  isfirstindex:boolean=false;

  constructor(private productservice:NewProductServiceService, private activatedroute:ActivatedRoute
    ,private router:Router){}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((par)=>{//parammap is observable
      const paramid=par.get('id');
      const id=paramid? +paramid :undefined;
      this.product=this.productservice.getProductbyID(id);
      // this.islastindex==this.productservice.isLastIndex(paramid);
      this.islastindex=this.productservice.isLastIndex(id);
      this.isfirstindex=this.productservice.isFirstIndex(id);
    })
    
    // const paramid=this.activatedroute.snapshot.paramMap.get('id');//hat l id el fel route
    // const id=paramid? +paramid :undefined //+ by7wel l string to number
    //  this.product=this.productservice.getProductbyID(id);//hat l product b2a
  }
  goNext(id:number){
   const nextid=this.productservice.handleNextButton(id)
   this.router.navigate(['/product',nextid]);
  }getBack(id:number){
    const previd=this.productservice.handleBackButton(id);
    this.router.navigate(['/product',previd]);
  }GOBack(){
    this.router.navigate(['/home']);
  }

}

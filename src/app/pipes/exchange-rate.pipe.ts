import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRate',
  standalone: true
})
export class ExchangeRatePipe implements PipeTransform {

  currencies:any={
    EGP:30,
    EUR:1/1.2

  };
  transform(value: number, currancy: string): unknown {
    return `${(value* this.currencies[currancy]).toFixed(2)} ${currancy} `;
  }

}

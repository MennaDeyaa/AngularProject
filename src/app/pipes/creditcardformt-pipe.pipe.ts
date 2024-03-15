import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardformtPipe',
  standalone: true
})
export class CreditcardformtPipePipe implements PipeTransform {

  //_character=['_']

  transform(value: string): string {
    const chunks = Array.from(value).reduce((acc, _, i) => {
      if ((i + 1) % 4 === 0 && i !== value.length - 1) {
        acc.push('_');//add a dash character if condition is true
      }
      acc.push(_);  //push the current element onto the accumulator array
      return acc;
    }, [] as string[]);

    return chunks.join('');
  }

}

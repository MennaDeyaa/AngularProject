import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-obs',
  standalone: true,
  imports: [],
  templateUrl: './obs.component.html',
  styleUrl: './obs.component.css'
})
export class ObsComponent implements OnInit, OnDestroy {
  observable: Observable<any> = new Observable();
  subsription!: Subscription;

  ngOnInit(): void {
    this.observable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        if (count == 10) observer.complete();
        observer.next('menna');
        count++;
      }, 1000);
    });

    this.subsription = this.observable.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
// ngOnInit(): void {
//   // Create an Observable that will publish a value on an interval
// const secondsCounter = interval(3000);
// // Subscribe to begin publishing values
// const subscription = secondsCounter.subscribe(n =>
//   console.log(`It's been ${n + 1} seconds since subscribing!`));
// }
// ngOnDestroy(): void {
//   throw new Error('Method not implemented.');
// }
// observable :Observable<any>=new Observable() //generic
// 





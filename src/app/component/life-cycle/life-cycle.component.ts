import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnChanges,
OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy{
    constructor(){
      console.log('constr');
    }ngOnChanges(): void {
      console.log('ngOnChanges');
    }ngOnInit(): void {
      console.log('ngOnInit');
    }ngDoCheck(): void {
      console.log('ngDoCheck');
    }ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }
}

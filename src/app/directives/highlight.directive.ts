import { Directive, ElementRef, HostListener, Input, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() set quantity(value:number){
         if(value==0){
         this.elmentRef.nativeElement.style.background='red';
        }
        else {
          this.elmentRef.nativeElement.style.background='initial';
        }
  }
  
  
  
  @Input() set everyproduct(value: boolean){
    if(value)
    this.renderer.setStyle(this.elmentRef.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(this.elmentRef.nativeElement, 'box-shadow', '0 0 10px rgba(0, 0, 0, 0.6)');
  }
  @HostListener('mouseover') onmouseOver(){ //name of (event) in the bracket and then the method
    this.renderer.setStyle(this.elmentRef.nativeElement,'box-shadow', '5px 10px 10px rgba(0, 0, 0, 1)')
  }
  @HostListener('mouseout') onmouseOut(){
    this.renderer.setStyle(this.elmentRef.nativeElement,'box-shadow', '0 0 10px rgba(0, 0, 0, 0.6)');
  }

  constructor(private elmentRef:ElementRef,private renderer: Renderer2) { }

}

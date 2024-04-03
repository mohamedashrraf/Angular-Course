import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elRef:ElementRef, private rendrer:Renderer2) {
    //طريقتين امسك بيهم العنصر وتحطله خواص renderer - HostBinding
    this.rendrer.setStyle(this.elRef.nativeElement,"background-color","blue") //يتحط خواص الفانكشن بالترتيب العنصر اللي همسكه - الخاصية - قيمتها
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.rendrer.setStyle(this.elRef.nativeElement,"background-color","red")
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.rendrer.setStyle(this.elRef.nativeElement,"background-color","transparent")
  }
}

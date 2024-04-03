import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIf]'
})
export class NgIfDirective {
  //لازم اسم الفانكشن يبقي نفس اسم السلكتور
  @Input() set appNgIf(condition: boolean) { //set عشان لو اتغيرت القيمة بتاعت الكوندشن
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear(); //تشيل تاثير الدايركتف
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  //template هو ال * في ال *ngIf
  //ViewContainerRef يعبر عن المكان اللي هستخدم فيه الدايركتف
  //<div *appNgIf="onlyOdd"> عشان استخدمها
}

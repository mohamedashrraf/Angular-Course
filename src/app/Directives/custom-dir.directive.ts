import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDir]' //class decorator بتعمل ديكوريت للكلاس
})
export class CustomDirDirective {

  @Input('customDir') highLightColor: string = 'yellow'; //الدايركتف تعتبر ابن للكمبوننت اللي هستخدمها فيها اقدر احط فيها انبوت باخد قمة من الكمبوننت اللي بستخدمها فيه
  //input هي property decorator تحط فاليو للبروبرتي بتاعتي
  //highLightColor="yellow" or "'yellow'" نكتب دي جنب اسم الدايركتف في العنصر اللي عايزين نشغلها فيه
  //customDir="yellow" عشان نساوي القيمة بالدايركتف علطول نعمل elias جنب input ونحط اسم الدايركتف او ال class decorator
  //[appCustomDir]="yellow" عشان نساوي قيمة الكمبوننت في الاتشتيمال بالدايركتف علطول نعمل elias ونحط قيمة الدايركتف باسم السلكتور بتاع الكمبوننتclass decorator


  constructor(private elemRef: ElementRef) { //لما نعرف حاجة جوا ال constructor بنقدر نستخدمها في اي حتة جوا الكلاس بتاعه بس نحط قبلها this
    this.elemRef.nativeElement.style.border = "2px solid red";
    //لازم نعرف ElementRef للدايركتف عشان اقدر استدعيها برا في الاتشتيمال
  }

}

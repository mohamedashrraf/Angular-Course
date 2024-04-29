import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-max-forms-ractive',
  templateUrl: './max-forms-ractive.component.html',
  styleUrls: ['./max-forms-ractive.component.scss']
})

export class MaxFormsRactiveComponent {
  gameForm: FormGroup;   //نعرف ريفرنس للفورم نربطها بالاتشتيمال ب property binding
  signupForm: any;

  constructor(private FormBuilder: FormBuilder) {
    //2- Reactive Forms
    //import { ReactiveFormsModule } from '@angular/forms'; لازم نعمل امبورت في ال appmodule

    //طريقة 1 FormGroup
    //بعرف كل الكنترولس بتاعتي في التايبسكربت واديها قيمة ابتدائية وال validations زي min, required
    this.gameForm = new FormGroup({ //ندي للريفرنس قيمة ابتدائية لكل انبوت
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), //تاخد الانشيال فاليو والفاليديت اللي هيحصل علي الانبوت
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      price: new FormControl('', Validators.required),
    });

    //طريقة 2  FormBuilder
    this.gameForm = this.FormBuilder.group({ //طريقة تانية بدل ما اعرف كل انبوت =formControl اعرف الفورم كلها ب this.FormBuilder.group
      //نعرف كل كنترول فيها في ارراي
      name: ['Hulk', [Validators.required, Validators.minLength(3)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      price: ['', Validators.required],
    });
  }

  handleSubmitForm() {
    console.log(this.gameForm);
  }

  //from array نضيف اكتر من برودكت اسم وكمية
  //كل ما ندوس علي الزرار يظهر انبوت اكتب في عنصر جديد
  hobbies!: new FormArray([]),
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //215 Custom Validators بعمل كاستوم يطلع ايرور لو استخدمت اسماء معينة الاسماء دي ممنوعة
    forbiddenUsernames = ['Chris', 'Anna'];
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  //218 اقدر اعمل subscribe علي تغيرات الكنترول

}

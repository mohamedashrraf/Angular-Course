import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-max-forms-temp',
  templateUrl: './max-forms-temp.component.html',
  styleUrls: ['./max-forms-temp.component.scss']
})

export class MaxFormsTempComponent {
  // [(ngModel)] لو عرفنا بالبايندنج كده في الاتشتيامال لازم تحط تفاصيلها هنا
  //هدفها اننا بنستخدمها في حالة لو عايزين نعمل initial valuse تكون موجودة اول ما افتح صفحة الفورم غير كده نستخدم ngModel العادية
  //الفرق بينها وبين [ngModel] اني ممكن اخليها تسمع في كنترول او مكان تاني وياخد نفس قيمتها
  game = {
    name : "",
    description: "",
    price: ""
  }

  //[ngModel]  هدفها اننا بنستخدمها في حالة لو عايزين نعمل initial valuse تكون موجودة اول ما افتح صفحة الفورم غير كده نستخدم ngModel العادية
  // زي select بيختار اوبكشن معين انا محدد قيمته

  defaultQuestion = 'teacher';
    // <select
            // id="secret"
            // class="form-control"
            // [ngModel]="defaultQuestion"
            // name="secret">
            // <option value="pet">Your first Pet?</option>
            // <option value="teacher">Your first teacher?</option>
  // </select>


  //  فيه بروبيرتي اسمه dirty جوا الفروف لو بدات اكتب في الفورم يتغير من فولس ل ترو


  @ViewChild('gameForm') gamee!: NgForm; //ممكن نستخدم ال viewChild في اننا نوصل للفورم عن طريق الريفرنس

  answer = '';
  genders = ['male', 'female'];

  handleFormSubmit(form : any){
    console.log(form)
  }


  //ngFormGroup بحط فيها الكنترولس اللي عايوها في جروب جوا الفورم لما افليديت عليها مثلا يظهر تيكست معين

  //202
  //  1- setValue
    genders = ['male', 'female'];
    this.signupForm.setValue({ //لو عايز احط قيم ياخدها لما ادوس علي زرار بحدد القيمة اللي عايز اغيرها اكتب قيمتها واللي عايز اخليها زي ماهيا اسيبها فاضية
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet', //قيم السلكت او الراديو buttons لازم طبعا تكون من القيم اللي انا حاطتهاله في الاول
      questionAnswer: '',
      gender: 'male'
    });
// 2- patchValue
    this.signupForm.form.patchValue({ //احسن من ال setValue عشان بديله القيمة اللي عايز اغيرها بس واللي عايز اسيبها زي ماهيا مش بكتبها بياخدها من .form
      userData: {
        username: suggestedName
      }
    });

    //203
  user = { //نعرف اوبجكت عشان نساوي بيه قيم الفورم عشان نعرضها
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

  //204
    this.signupForm.reset(); //ممكن نعمل ريسيت للفاليو اللي ضفناها في ال setValue
}

}

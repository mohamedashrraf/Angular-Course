import { Component } from '@angular/core';

@Component({
  selector: 'app-army1',
  templateUrl: './army1.component.html',
  styleUrls: ['./army1.component.scss']
})
export class Army1Component {

  //23
  print(event: KeyboardEvent) { //فانكشن تطبع الايفنت اللي هعمله باي زرار من الكيبورد
    console.log(event);
  }
  otherPrint() {
    console.log("again");
  }
}

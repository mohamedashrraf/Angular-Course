import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency', //اسم البايب اللي هكتبه في الاتشتيامال
})
export class CurrencyPipe implements PipeTransform {

  transform(val: number, rate: number): number {

    return val * 100; //قيمة العنصر اللي هعمل عليه البايب مضروبة في 100 وممكن اعنل بدالها براميتير ياخد قيمة متغيرة

    return val * rate; //بحط قيمته بعد اسم البايب في الاتشتيمال item | currencyPipe: 10
  }

}

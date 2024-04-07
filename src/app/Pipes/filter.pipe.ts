import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //تخلي البايب تتنفذ كل ما يحصل اي تغير في الابلكيشن bad behaviour بس بتنفعني لو عملت فلتر بايب وعايز اضيف عنصر بعد ما عملت الفلتر من العناصر اللي المفروض تظهر في الفلتر
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

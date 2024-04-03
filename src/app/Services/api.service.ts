import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //المكان اللي عايز السيرفيس تشتغل جواه ده معناه كل الابلكيشن لو حطيت اسم موديول يبقي في الكمبوننت اللي جوا الموديول ده بس
})
export class ApiService {

  constructor() { }
}

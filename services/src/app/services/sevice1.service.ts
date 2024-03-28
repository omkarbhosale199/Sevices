import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sevice1Service {

  constructor() { }
  // constructor(private ele:ElementRef){ }
// private ele:ElementRef is V.IMP
// because with the help private ele:ElementRef We can access this data/method/code/fun/API etc. in multiple component
// it is tightly couple we need loosely couple so use DI
  reverseString(input:string){
    let rString='';
    for (let i = input.length; i >= 0 ; i--) {
      const element = input[i];
      rString += input[i];
    }
    return rString;

  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Customobservable5Service {
  //step 1
  //Observers --- (Subscribers)
//The observers communicate with the Observable using callbacks function.

//The observers will pass three methods(optional)

 //next(), --->> it provide value which come from observable
 //error(),--- >> sho error massage
//complete(). --->>>

customObservable= new Observable((observer)=>{

  console.log('Observable start');

  observer.next('1')

  observer.next('2')

  observer.next('3')

  observer.next('4')

  observer.next('5')

})
  constructor() { }
}

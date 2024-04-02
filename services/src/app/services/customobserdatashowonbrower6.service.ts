import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//  refer customobserdatashowonbrower4 comp

export class Customobserdatashowonbrower6Service {


customObservable= new Observable <any>((observer)=>{

  console.log('Custom observable start');
  observer.next('1')
  observer.next('2')
  observer.next('3')
  observer.next('4')
  observer.next('5')
})

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Angular  have create single instance of service
  //  this single instance we can use through application
})
export class Sevice2Service {

  constructor()
  {}

// We can access this data/method/code/fun/API etc. in multiple component
// it is tightly couple we need loosely couple so use DI
reverseString2(input:string){
  let rString='';
  for (let i = input.length; i >= 0 ; i--) {
    const element = input[i];
    rString += element
  }
  return rString;

}
//Dependency Injection is nothing but a design pattern it widely used in software development.

//  A component can take it's dependency from external sources rather than creating it self
//  In Angular Dependency Injection is way to provide objects/instance(dependencies) to a class

//  (component/ service) instead of the class creating the objects itself.

//  key concepts:

// Dependency: A Dependency is an object that another object relies on--------->>>

//  Injector: to create dependencies (object/instance)--------->>> @Injectable

// Provider: It tells the injector how to create the object.--------->>>  providedIn: 'root'
 // (  Angular  have create single instance of service using  providedIn: 'root'
 // this single instance we can use through application)
}

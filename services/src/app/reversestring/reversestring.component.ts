import { Component, ElementRef, OnInit } from '@angular/core';
import { Sevice1Service } from '../services/sevice1.service';

@Component({
  selector: 'app-reversestring',
  templateUrl: './reversestring.component.html',
  styleUrls: ['./reversestring.component.css']
})
export class ReversestringComponent implements OnInit {

  constructor() { }

  ngOnInit( ): void {
// for using service or call the service we need to create instance
//so
// there is anther option DI ( no need to create every time instance)
const objDemo = new  Sevice1Service( );
console.log(objDemo.reverseString('abcd'));
// inspect
  }









}

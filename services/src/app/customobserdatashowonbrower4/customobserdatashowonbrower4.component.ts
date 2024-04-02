import { Component, OnInit } from '@angular/core';
import { Customobserdatashowonbrower6Service } from '../services/customobserdatashowonbrower6.service';

@Component({
  selector: 'app-customobserdatashowonbrower4',
  templateUrl: './customobserdatashowonbrower4.component.html',
  styleUrls: ['./customobserdatashowonbrower4.component.css']
})
// Customobserdatashowonbrower6Service service used

export class Customobserdatashowonbrower4Component implements OnInit {

data:string[]=[];
  constructor(private _Customobserdatashowonbrower6Service:Customobserdatashowonbrower6Service) {

    this._Customobserdatashowonbrower6Service.customObservable.subscribe((res:string)=> {
     console.log(res);
     this.data.push(res);
    })
  }

  ngOnInit(): void {

  }

}

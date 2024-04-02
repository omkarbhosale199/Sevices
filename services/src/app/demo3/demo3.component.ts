import { Component, OnInit } from '@angular/core';
import { Customobservable5Service } from '../services/customobservable5.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  constructor(private _Customobservable5Service:Customobservable5Service) {
    this._Customobservable5Service.customObservable.subscribe(

      {
        next: (val) => {
          console.log(val);

        }, // next call back

        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed');
        }
      }
    )
    }

  ngOnInit(): void {

    // or
    // this._Customobservable5Service.customObservable.subscribe(resut =>{console.log(resut);
    // })
  }

}

import { Component, OnInit } from '@angular/core';
import { Service4Service } from '../services/service4.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor(private callService4:Service4Service) { }

  ngOnInit(): void {
    this.callService4.getTodo().subscribe(res => {

      console.log(res);


    })
  }


}

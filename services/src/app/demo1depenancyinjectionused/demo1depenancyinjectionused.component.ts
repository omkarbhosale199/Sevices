import { Component, OnInit } from '@angular/core';
import { Sevice2Service } from '../services/sevice2.service';

@Component({
  selector: 'app-demo1depenancyinjectionused',
  templateUrl: './demo1depenancyinjectionused.component.html',
  styleUrls: ['./demo1depenancyinjectionused.component.css']
})
export class Demo1depenancyinjectionusedComponent implements OnInit {

  // Inject  service mean DI/angular  provider
  // DI
  constructor(private objService2:Sevice2Service) { }

  // So here class Demo1depenancyinjectionusedComponent depend on objService2:Sevice2Service
  // mean class Demo1depenancyinjectionusedComponent depend on class Sevice2Service
  // one class depend on anther class (so achieve that we can use DI)
  ngOnInit(): void {
    const rStr= this.objService2.reverseString2('"Shubham"');
    console.log(rStr);

  }

}

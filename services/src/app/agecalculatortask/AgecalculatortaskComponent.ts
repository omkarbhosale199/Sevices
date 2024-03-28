import { Component, OnInit } from '@angular/core';
import { Ageservice3Service } from '../services/ageservice3.service';


@Component({
  selector: 'app-agecalculatortask',
  templateUrl: './agecalculatortask.component.html',
  styleUrls: ['./agecalculatortask.component.css']
})
export class AgecalculatortaskComponent implements OnInit {

  dateOfBirth!: Date;
  age!: number;

  constructor(private ageCalculatorService: Ageservice3Service) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  calculateAge(): void {
    if (this.dateOfBirth) {
      this.age = this.ageCalculatorService.calculateAge(this.dateOfBirth);
    } else {
      this.age = null;
    }
  }
}

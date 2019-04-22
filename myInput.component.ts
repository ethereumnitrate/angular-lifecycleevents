import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'myInput',
  templateUrl: './myInput.html',
  styleUrls: ['./myInput.css'],
})
export class MyInputComponent implements  OnInit,OnChanges {
  @Input('name') personName: string;
  @Input('occupation') occupation: string;
  constructor(){
      this.personName = "John Doe";
      this.occupation = "Anonymity";
  }
  ngOnInit() {
    console.log("ngOnInit  - Initialized " + this.personName);
}
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges - data changed: " + this.personName);
    for (let prop in changes){
      console.log("Previous: " + changes[prop].previousValue);
      console.log("Current: " + changes[prop].currentValue);
    }
  }
  changeData() {
    this.personName = "Someone Else";
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor() { }

  names = ["David","Jasmin","Steve","Nicole","Lindsay","Mia"];
  name;

  getName() {
    this.name = this.names[Math.floor(Math.random() * this.names.length)];
    console.log("Random Name")
  }

  ngOnInit() {
  }

}

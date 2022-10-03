import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chartsList: Array<string> = [
    "Area Chart",
    "Bar Chart",
    "Line Chart"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  // categories=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public style: LineStyle = "normal";

  categories=['Jan', 'Feb', 'Mar', 'Apr'];

  data=[1, 2, 3, 5];

  data1=[-1, -2, -3, -5]

  constructor() { }

  ngOnInit(): void {
  }

}

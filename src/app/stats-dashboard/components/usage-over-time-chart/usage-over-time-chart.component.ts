import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-usage-over-time-chart',
  templateUrl: './usage-over-time-chart.component.html',
  styleUrls: ['./usage-over-time-chart.component.scss']
})
export class UsageOverTimeChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Stub' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(89, 76, 202, 0.2)',
      borderColor: 'rgba(89, 76, 202, 0.8)',
      pointBackgroundColor: 'rgba(89, 76, 202, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(89, 76, 202, 0.8)'
    }
  ];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

}

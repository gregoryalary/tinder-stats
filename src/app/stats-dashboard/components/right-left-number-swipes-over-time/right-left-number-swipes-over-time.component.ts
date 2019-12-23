import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-right-left-number-swipes-over-time',
  templateUrl: './right-left-number-swipes-over-time.component.html',
  styleUrls: ['./right-left-number-swipes-over-time.component.scss']
})
export class RightLeftNumberSwipesOverTimeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [123, 108, 88, 45, 23, 66, 1], label: 'Right swipes' },
    { data: [500, 456, 300, 45, 20, 50, 22], label: 'Left swipes' }
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
    { // right swipes
      backgroundColor: 'rgba(89, 76, 202, 0.2)',
      borderColor: 'rgba(89, 76, 202, 0.8)',
      pointBackgroundColor: 'rgba(89, 76, 202, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(89, 76, 202, 0.8)'
    },
    { // left swipes
      backgroundColor: 'rgba(171, 223, 249, 0.2)',
      borderColor: 'rgba(171, 223, 249, 0.8)',
      pointBackgroundColor: 'rgba(171, 223, 249, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(171, 223, 249, 0.8)'
    }
  ];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-right-swipes-over-time',
  templateUrl: './right-swipes-over-time.component.html',
  styleUrls: ['./right-swipes-over-time.component.scss']
})
export class RightSwipesOverTimeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [15, 16, 15, 14, 18, 21, 23], label: 'Right swipes' },
    { data: [85, 84, 85, 86, 82, 79, 77], label: 'Left swipes' }
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

import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {UsageStore} from '../../../../stores/usage.store';
import {TinderDailyUsage} from '../../../../models/tinder-daily-usage.model';

@Component({
  selector: 'app-usage-over-time-chart',
  templateUrl: './usage-over-time-chart.component.html',
  styleUrls: ['./usage-over-time-chart.component.scss']
})
export class UsageOverTimeChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Opening' }
  ];
  public lineChartLabels: Label[] = [];
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

  constructor(private usageStore: UsageStore) { }

  ngOnInit() {
    this.usageStore.usage$.subscribe((dailyUsages: TinderDailyUsage[]): void => {
      this.lineChartData = [{
        data: dailyUsages.map((usage: TinderDailyUsage): number => usage.appOpens),
        label: 'Opening'
      }];
      this.lineChartLabels = dailyUsages.map((usage: TinderDailyUsage): string => usage.date.toDateString());
    });
  }

}

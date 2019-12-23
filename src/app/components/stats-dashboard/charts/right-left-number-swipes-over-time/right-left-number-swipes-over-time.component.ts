import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {UsageStore} from '../../../../stores/usage.store';
import {TinderDailyUsage} from '../../../../models/tinder-daily-usage.model';

@Component({
  selector: 'app-right-left-number-swipes-over-time',
  templateUrl: './right-left-number-swipes-over-time.component.html',
  styleUrls: ['./right-left-number-swipes-over-time.component.scss']
})
export class RightLeftNumberSwipesOverTimeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Right swipes' },
    { data: [], label: 'Left swipes' }
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

  constructor(private usageStore: UsageStore) { }

  ngOnInit() {
    this.usageStore.usage$.subscribe((dailyUsages: TinderDailyUsage[]): void => {
      this.lineChartData = [
        { data: dailyUsages.map((usage: TinderDailyUsage): number => usage.rightSwipes), label: 'Right swipes' },
        { data: dailyUsages.map((usage: TinderDailyUsage): number => usage.leftSwipes), label: 'Left swipes' },
      ];
      this.lineChartLabels = dailyUsages.map((usage: TinderDailyUsage): string => usage.date.toDateString());
    });
  }

}

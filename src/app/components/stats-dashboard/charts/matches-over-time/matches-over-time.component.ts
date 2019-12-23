import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {UsageStore} from '../../../../stores/usage.store';
import {TinderDailyUsage} from '../../../../models/tinder-daily-usage.model';

@Component({
  selector: 'app-matches-over-time',
  templateUrl: './matches-over-time.component.html',
  styleUrls: ['./matches-over-time.component.scss']
})
export class MatchesOverTimeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Matches per days' }
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

  constructor(private usageStore: UsageStore) { }

  ngOnInit() {
    this.usageStore.usage$.subscribe((dailyUsages: TinderDailyUsage[]): void => {
      this.lineChartData = [{
        data: dailyUsages.map((usage: TinderDailyUsage): number => usage.matches),
        label: 'Matches per days'
      }];
      this.lineChartLabels = dailyUsages.map((usage: TinderDailyUsage): string => usage.date.toDateString());
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {TinderDailyUsage} from '../../../../models/tinder-daily-usage.model';
import {UsageStore} from '../../../../stores/usage.store';

@Component({
  selector: 'app-messages-sent-receive-over-time',
  templateUrl: './messages-sent-receive-over-time.component.html',
  styleUrls: ['./messages-sent-receive-over-time.component.scss']
})
export class MessagesSentReceiveOverTimeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Messages sent' },
    { data: [], label: 'Messages received' }
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

  constructor(private usageStore: UsageStore) { }

  ngOnInit() {
    this.usageStore.usage$.subscribe((dailyUsages: TinderDailyUsage[]): void => {
      this.lineChartData = [
        { data: dailyUsages.map((usage: TinderDailyUsage): number => usage.messagesSent), label: 'Messages sent' },
        { data: dailyUsages.map((usage: TinderDailyUsage): number => usage.received), label: 'Messages received' },
      ];
      this.lineChartLabels = dailyUsages.map((usage: TinderDailyUsage): string => usage.date.toDateString());
    });
  }

}

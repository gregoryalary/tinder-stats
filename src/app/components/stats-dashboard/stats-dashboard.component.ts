import { Component, OnInit } from '@angular/core';
import {UsageStore} from '../../stores/usage.store';
import {TinderDailyUsage} from '../../models/tinder-daily-usage.model';
import {max} from 'rxjs/operators';

@Component({
  selector: 'app-stats-dashboard',
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss']
})
export class StatsDashboardComponent implements OnInit {

  public dailyUsages: TinderDailyUsage[];
  public firstUsage: Date;
  public lastUsage: Date;
  public usageDayDuration: number;
  public totalOpening: number;
  public maxOpening: number;
  public totalRightSwipes: number;
  public totalLeftSwipes: number;
  public totalMatches: number;
  public totalMessagesSent: number;
  public totalMessagesReceived: number;

  constructor(private usageStore: UsageStore) { }

  ngOnInit() {
    this.usageStore.usage$.subscribe((dailyUsages: TinderDailyUsage[]): void => {
        this.dailyUsages = dailyUsages;
        this.firstUsage = dailyUsages[0].date;
        this.lastUsage  = dailyUsages[dailyUsages.length - 1].date;
        this.usageDayDuration = (this.lastUsage.getTime() - this.firstUsage.getTime()) / 86400000;
        this.totalOpening = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.appOpens, 0
        );
        this.maxOpening = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => Math.max(previousValue, currentValue.appOpens), 0
        );
        this.totalRightSwipes = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.rightSwipes, 0
        );
        this.totalLeftSwipes = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.leftSwipes, 0
        );
        this.totalMatches = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.matches, 0
        );
        this.totalMessagesSent = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.messagesSent, 0
        );
        this.totalMessagesReceived = dailyUsages.reduce(
          (previousValue: number, currentValue: TinderDailyUsage): number => previousValue + currentValue.received, 0
        );
    });
  }

}

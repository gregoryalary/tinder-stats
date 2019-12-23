import {Injectable} from '@angular/core';
import {TinderDailyUsage} from '../models/tinder-daily-usage.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TinderUsageFactoryService {

  constructor() { }

  buildTinderUsageObjectFromTinderData(data: string): TinderDailyUsage[] {
    const parsedData: any = JSON.parse(data);
    return parsedData ? this.parsedDataToTinderUsage(parsedData) : null;
  }

  private parsedDataToTinderUsage(parsedData: any): TinderDailyUsage[] {
    console.log(parsedData);
    const allDates: string[] = Object.keys(parsedData.Usage.app_opens);
    const firstDate: string = allDates.reduce(
      (previousValue, currentValue) => moment(previousValue).isBefore(currentValue) ? previousValue : currentValue, allDates[0]
    );
    const lastDate: string = allDates.reduce(
      (previousValue, currentValue) => moment(previousValue).isBefore(currentValue) ? currentValue : previousValue, allDates[0]
    );
    const filledUsage: TinderDailyUsage[] = [];
    for (const d = moment(firstDate); d.isSameOrBefore(lastDate); d.add(1, 'd')) {
      filledUsage.push({
        date:         d.toDate(),
        appOpens:     parsedData.Usage.app_opens[d.format('YYYY-MM-DD')]         || 0,
        leftSwipes:   parsedData.Usage.swipes_passes[d.format('YYYY-MM-DD')]     || 0,
        matches:      parsedData.Usage.matches[d.format('YYYY-MM-DD')]           || 0,
        messagesSent: parsedData.Usage.messages_received[d.format('YYYY-MM-DD')] || 0,
        received:     parsedData.Usage.messages_sent[d.format('YYYY-MM-DD')]     || 0,
        rightSwipes:  parsedData.Usage.swipes_likes[d.format('YYYY-MM-DD')]      || 0,
      });
    }
    return filledUsage;
  }
}

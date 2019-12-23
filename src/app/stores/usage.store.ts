import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TinderDailyUsage} from '../models/tinder-daily-usage.model';

@Injectable({
  providedIn: 'root'
})
export class UsageStore {

  private usage: Subject<TinderDailyUsage[]> = new Subject<TinderDailyUsage[]>();
  public usage$: Observable<TinderDailyUsage[]> = this.usage.asObservable();

  public updateUsage(usage: TinderDailyUsage[]): void {
    this.usage.next(usage);
  }

}

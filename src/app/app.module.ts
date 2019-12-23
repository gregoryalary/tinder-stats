import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbCardModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StatsDashboardComponent } from './stats-dashboard/stats-dashboard.component';
import {ChartsModule} from 'ng2-charts';
import { UsageOverTimeChartComponent } from './stats-dashboard/components/usage-over-time-chart/usage-over-time-chart.component';
import { SimpleStatNumberComponent } from './stats-dashboard/components/simple-stat-number/simple-stat-number.component';
import { RightLeftPercentageSwipesOverTimeComponent } from './stats-dashboard/components/right-left-percentage-swipes-over-time/right-left-percentage-swipes-over-time.component';
import { MatchesOverTimeComponent } from './stats-dashboard/components/matches-over-time/matches-over-time.component';
import { MessagesSentReceiveOverTimeComponent } from './stats-dashboard/components/messages-sent-receive-over-time/messages-sent-receive-over-time.component';
import { RightLeftNumberSwipesOverTimeComponent } from './stats-dashboard/components/right-left-number-swipes-over-time/right-left-number-swipes-over-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    StatsDashboardComponent,
    UsageOverTimeChartComponent,
    SimpleStatNumberComponent,
    RightLeftPercentageSwipesOverTimeComponent,
    MatchesOverTimeComponent,
    MessagesSentReceiveOverTimeComponent,
    RightLeftNumberSwipesOverTimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

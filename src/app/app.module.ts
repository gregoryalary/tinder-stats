import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbCardModule, NbDialogModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { StatsDashboardComponent } from './components/stats-dashboard/stats-dashboard.component';
import {ChartsModule} from 'ng2-charts';
import { UsageOverTimeChartComponent } from './components/stats-dashboard/charts/usage-over-time-chart/usage-over-time-chart.component';
import { SimpleStatNumberComponent } from './components/stats-dashboard/charts/simple-stat-number/simple-stat-number.component';
import { RightLeftPercentageSwipesOverTimeComponent } from './components/stats-dashboard/charts/right-left-percentage-swipes-over-time/right-left-percentage-swipes-over-time.component';
import { MatchesOverTimeComponent } from './components/stats-dashboard/charts/matches-over-time/matches-over-time.component';
import { MessagesSentReceiveOverTimeComponent } from './components/stats-dashboard/charts/messages-sent-receive-over-time/messages-sent-receive-over-time.component';
import { RightLeftNumberSwipesOverTimeComponent } from './components/stats-dashboard/charts/right-left-number-swipes-over-time/right-left-number-swipes-over-time.component';
import { UploadModalComponent } from './components/layout/sidebar/modals/upload-modal/upload-modal.component';
import { DragAndDropZoneFileComponent } from './components/layout/sidebar/modals/upload-modal/drag-and-drop-zone-file/drag-and-drop-zone-file.component';

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
    RightLeftNumberSwipesOverTimeComponent,
    UploadModalComponent,
    DragAndDropZoneFileComponent,
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
    ChartsModule,
    NbDialogModule.forRoot(),
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UploadModalComponent
  ]
})
export class AppModule { }

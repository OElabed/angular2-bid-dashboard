import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { BidDashboardLiveModule } from '../../shared/modules/bid/dashboard-live/bidDashboardLive.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';
import { LiveDashboardModule } from './live-bids/live.dashboard.module';
import { WatchDashboardModule } from './watch-bids/watch.dashboard.module';

import { BidService } from '../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BidDashboardLiveModule,
        BreadcrumbModule,
        LiveDashboardModule,
        WatchDashboardModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [BidService, BreadcrumbService]
})

export class DashboardModule { }

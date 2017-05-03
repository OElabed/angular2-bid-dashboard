import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidDashboardLiveModule } from '../../../shared/modules/bid/dashboard-live/bidDashboardLive.module';
import { BreadcrumbModule } from '../../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { BidService } from '../../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';

import { LiveDashboardComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule, BidDashboardLiveModule, BreadcrumbModule],
    declarations: [LiveDashboardComponent],
    exports: []
})

export class LiveDashboardModule { }

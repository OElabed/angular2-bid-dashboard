import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidDashboardLiveModule } from '../../../shared/modules/bid/dashboard-live/bidDashboardLive.module';
import { BreadcrumbModule } from '../../../shared/modules/layout/breadcrumb/breadcrumb.module';
import { PagingModule } from '../../../shared/modules/layout/list/paging/paging.module';

import { BidService } from '../../../shared/services/bid/bid.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb/breadcrumb.service';

import { LiveDashboardComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule, BidDashboardLiveModule, BreadcrumbModule, PagingModule],
    declarations: [LiveDashboardComponent],
    providers: [BidService, AuthService, BreadcrumbService],
    exports: [LiveDashboardComponent]
})

export class LiveDashboardModule { }

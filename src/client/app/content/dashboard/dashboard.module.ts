import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { ProductLiveModule } from '../../shared/modules/product/live/productLive.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { BidService } from '../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, ProductLiveModule, BreadcrumbModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [BidService, BreadcrumbService]
})

export class DashboardModule { }

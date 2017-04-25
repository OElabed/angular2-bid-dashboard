import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAuctionsComponent } from './live-auctions.component';

import { BidLiveModule } from '../../shared/modules/bid/live/bidLive.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { BidService } from '../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, BidLiveModule, BreadcrumbModule],
    declarations: [LiveAuctionsComponent],
    exports: [LiveAuctionsComponent],
    providers: [BidService, BreadcrumbService]
})

export class LiveAuctionsModule { }

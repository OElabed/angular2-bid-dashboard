import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAuctionsComponent } from './feature-auctions.component';

import { BidFeatureModule } from '../../shared/modules/bid/feature/bidFeature.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { BidService } from '../../shared/services/bid/bid.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, BidFeatureModule, BreadcrumbModule],
    declarations: [FeatureAuctionsComponent],
    exports: [FeatureAuctionsComponent],
    providers: [BidService, BreadcrumbService]
})

export class FeatureAuctionsModule { }

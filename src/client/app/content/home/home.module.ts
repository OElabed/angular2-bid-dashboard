import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent } from './home.component';
import { BidLiveModule } from '../../shared/modules/bid/live/bidLive.module';
import { BidFeatureModule } from '../../shared/modules/bid/feature/bidFeature.module';

import { BidService } from '../../shared/services/bid/bid.service';

@NgModule({
    imports: [CommonModule, BidLiveModule, BidFeatureModule],
    declarations: [HomeComponent, FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent],
    exports: [HomeComponent, FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent],
    providers: [BidService]
})

export class HomeModule { }

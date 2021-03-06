import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { LiveAuctionsModule } from './live-auctions/live-auctions.module';
import { FeatureAuctionsModule } from './feature-auctions/feature-auctions.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoriesModule } from './categories/categories.module';
import { LiveBidModule } from './bid/live/live-bid.module';

import { ContentComponent } from './content.component';
import { TopNavModule } from '../shared/modules/layout/topnav/topNav.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        LiveAuctionsModule,
        FeatureAuctionsModule,
        DashboardModule,
        CategoriesModule,
        LiveBidModule,
        TopNavModule
    ],
    declarations: [ContentComponent],
    exports: [ContentComponent]
})

export class ContentModule { }

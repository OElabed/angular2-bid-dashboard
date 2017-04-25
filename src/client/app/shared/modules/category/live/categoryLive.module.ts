import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidLiveModule } from '../../../../shared/modules/bid/live/bidLive.module';

import { CategoryLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, BidLiveModule, RouterModule],
    declarations: [CategoryLiveComponent],
    exports: [CategoryLiveComponent]
})

export class CategoryLiveModule { }

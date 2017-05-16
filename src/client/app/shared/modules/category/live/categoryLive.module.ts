import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidLiveModule } from '../../../../shared/modules/bid/live/bidLive.module';
import { PagingModule } from '../../../modules/layout/list/paging/paging.module';

import { CategoryLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, BidLiveModule, RouterModule, PagingModule],
    declarations: [CategoryLiveComponent],
    exports: [CategoryLiveComponent]
})

export class CategoryLiveModule { }

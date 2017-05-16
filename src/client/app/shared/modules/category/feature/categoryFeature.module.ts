import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidFeatureModule } from '../../bid/feature/bidFeature.module';
import { PagingModule } from '../../../modules/layout/list/paging/paging.module';

import { CategoryFeatureComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule, BidFeatureModule, PagingModule],
    declarations: [CategoryFeatureComponent],
    exports: [CategoryFeatureComponent]
})

export class CategoryFeatureModule { }

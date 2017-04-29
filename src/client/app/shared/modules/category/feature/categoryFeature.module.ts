import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BidFeatureModule } from '../../bid/feature/bidFeature.module';

import { CategoryFeatureComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule, BidFeatureModule],
    declarations: [CategoryFeatureComponent],
    exports: [CategoryFeatureComponent]
})

export class CategoryFeatureModule { }

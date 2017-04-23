import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductLiveModule } from '../../../../shared/modules/product/live/productLive.module';

import { CategoryLiveComponent } from './index';


@NgModule({
    imports: [CommonModule, ProductLiveModule, RouterModule],
    declarations: [CategoryLiveComponent],
    exports: [CategoryLiveComponent]
})

export class CategoryLiveModule { }

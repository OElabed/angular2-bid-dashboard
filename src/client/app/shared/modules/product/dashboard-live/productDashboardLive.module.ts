import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDashboardLiveComponent } from './index';


@NgModule({
    imports: [CommonModule],
    declarations: [ProductDashboardLiveComponent],
    exports: [ProductDashboardLiveComponent]
})

export class ProductDashboardLiveModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAuctionsComponent } from './feature-auctions.component';

import { ProductFeatureModule } from '../../shared/modules/product/feature/productFeature.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { ProductService } from '../../shared/services/product/product.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, ProductFeatureModule, BreadcrumbModule],
    declarations: [FeatureAuctionsComponent],
    exports: [FeatureAuctionsComponent],
    providers: [ProductService, BreadcrumbService]
})

export class FeatureAuctionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent } from './home.component';
import { ProductLiveModule } from '../../shared/modules/product/live/productLive.module';
import { ProductFeatureModule } from '../../shared/modules/product/feature/productFeature.module';

import { ProductService } from '../../shared/services/product/product.service';

@NgModule({
    imports: [CommonModule, ProductLiveModule, ProductFeatureModule],
    declarations: [HomeComponent, FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent],
    exports: [HomeComponent, FeatureAuctionsHomeComponent, LiveAuctionsHomeComponent],
    providers: [ProductService]
})

export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

import { ProductLiveModule } from '../../shared/modules/product/live/productLive.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';
import { CategoryLiveModule } from '../../shared/modules/category/live/categoryLive.module';
import { CategoryFeatureModule } from '../../shared/modules/category/feature/categoryFeature.module';

import { ProductService } from '../../shared/services/product/product.service';
import { BidService } from '../../shared/services/bid/bid.service';
import { CategoryService } from '../../shared/services/category/category.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, ProductLiveModule, BreadcrumbModule, CategoryLiveModule, CategoryFeatureModule],
    declarations: [CategoriesComponent],
    exports: [CategoriesComponent],
    providers: [ProductService, BidService, CategoryService, BreadcrumbService]
})

export class CategoriesModule { }

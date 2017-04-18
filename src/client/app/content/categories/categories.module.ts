import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

import { ProductLiveModule } from '../../shared/modules/product/live/productLive.module';
import { BreadcrumbModule } from '../../shared/modules/layout/breadcrumb/breadcrumb.module';

import { ProductService } from '../../shared/services/product/product.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

@NgModule({
    imports: [CommonModule, ProductLiveModule, BreadcrumbModule],
    declarations: [CategoriesComponent],
    exports: [CategoriesComponent],
    providers: [ProductService, BreadcrumbService]
})

export class CategoriesModule { }

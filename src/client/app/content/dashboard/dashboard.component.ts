import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../shared/services/product/product.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb/breadcrumb.service';

import { Product } from '../../shared/models/product';
import { Breadcrumb } from '../../shared/models/breadcrumb';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
    moduleId: module.id,
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    products: Product[] = [];
    breadcrumbs: Breadcrumb[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) { }

    ngOnInit() {
        this.productService
            .get()
            .subscribe(
         /* happy path */ p => this.products = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */() => this.isLoading = false);

        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('dashboard');
    }

}


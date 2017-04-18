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
    selector: 'feature-auctions-cmp',
    templateUrl: 'feature-auctions.component.html'
})
export class FeatureAuctionsComponent implements OnInit {

    breadcrumbs: Breadcrumb[] = [];

    constructor(private breadcrumbService: BreadcrumbService) { }

    ngOnInit() {
        this.breadcrumbs = this.breadcrumbService.getBreadcrumsLink('featureAuctions');
    }
}

